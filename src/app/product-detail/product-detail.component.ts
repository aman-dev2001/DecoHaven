import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostListener,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';
import { FeatureProductComponent } from '../shared/feature-product/feature-product.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FeatureProductComponent, ProductDescriptionComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('mainSwiper', { static: false }) mainSwiper!: SwiperContainer;
  @ViewChild('mainImage', { static: false, read: ElementRef }) mainImageRef!: ElementRef<HTMLElement>;

  product: any = null;
  productId = 0;
  images: string[] = [];
  activeIndex = 0;

  sizes = ['L', 'XL', 'XS'];
  colors = ['#5F56D6', '#F0D24A', '#000', '#C89F5A'];

  selectedSize = 'L';
  selectedColor = '#5F56D6';
  quantity = 1;

  // ZOOM state
  zoomActive = false;           // is zoom visible
  lensX = 0;                    // left position of lens (px)
  lensY = 0;                    // top position of lens (px)
  bgX = 0;                      // background-position X (px) for zoom-image
  bgY = 0;                      // background-position Y (px) for zoom-image
  zoomFactor = 2.5;             // how much larger the background image will be
  zoomedImage = '';
  lensSize = 150;               // lens dimension (px)
  mainImageWidth = 0;           // cached width of main image container
  mainImageHeight = 0;          // cached height
  zoomResultSize = 450;         // zoom view width/height (px) — matches CSS

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);

    if (!this.product) {
      alert('Product not found!');
      this.router.navigate(['/shop']);
      return;
    }

    this.images = [...this.product.images];
    this.zoomedImage = this.images[0];
  }

  ngAfterViewInit() {
    // initialize swiper if present
    if (this.mainSwiper && (this.mainSwiper as any).swiper) {
      const swiper = this.mainSwiper.swiper;
      swiper.params.autoplay = { delay: 2500, disableOnInteraction: false };
      swiper.autoplay.start();
      swiper.params.pagination = { clickable: true };
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();

      swiper.on('slideChange', () => {
        this.activeIndex = swiper.activeIndex;
        this.zoomedImage = this.images[this.activeIndex];
      });
    }

    // set initial dimensions if element available
    setTimeout(() => this.updateMainImageDimensions(), 50);
  }

  // keep dims fresh on resize
  @HostListener('window:resize', [])
  onWindowResize() {
    this.updateMainImageDimensions();
    // hide zoom on small screens
    if (window.innerWidth <= 1024) this.zoomActive = false;
  }

  updateMainImageDimensions() {
    if (!this.mainImageRef || !this.mainImageRef.nativeElement) return;
    const rect = this.mainImageRef.nativeElement.getBoundingClientRect();
    this.mainImageWidth = Math.round(rect.width);
    this.mainImageHeight = Math.round(rect.height);
    // keep zoomResultSize in sync with main image width if you prefer
    this.zoomResultSize = this.mainImageWidth; // ensures perfect mapping
  }

  // thumbnail click
  onThumbClick(i: number) {
    this.activeIndex = i;
    this.zoomedImage = this.images[i];
    try { this.mainSwiper.swiper.slideTo(i); } catch { /* ignore if swiper absent */ }
  }

  // MOUSE MOVE — very important: use container bounding box and cursor position to compute lens & background
  onMouseMove(event: MouseEvent) {
    // disable zoom on small screens
    if (window.innerWidth <= 1024) return;

    // prefer using the element ref, but fallback to closest selector
    const containerEl = this.mainImageRef?.nativeElement
      ?? (event.currentTarget as HTMLElement)?.closest('.main-image') as HTMLElement;

    if (!containerEl) return;

    const rect = containerEl.getBoundingClientRect();
    this.mainImageWidth = rect.width;
    this.mainImageHeight = rect.height;

    this.zoomActive = true;
    // cursor position inside image
    let cursorX = event.clientX - rect.left;
    let cursorY = event.clientY - rect.top;

    // clamp cursor inside image
    cursorX = Math.max(0, Math.min(cursorX, rect.width));
    cursorY = Math.max(0, Math.min(cursorY, rect.height));

    // lens top-left so lens center is under cursor
    let lensLeft = cursorX - this.lensSize / 2;
    let lensTop = cursorY - this.lensSize / 2;

    // clamp lens inside image area
    lensLeft = Math.max(0, Math.min(lensLeft, rect.width - this.lensSize));
    lensTop = Math.max(0, Math.min(lensTop, rect.height - this.lensSize));

    this.lensX = Math.round(lensLeft);
    this.lensY = Math.round(lensTop);

    // CALCULATE background position for zoom result
    // background-size = rect.width * zoomFactor
    const bgWidth = rect.width * this.zoomFactor;
    const bgHeight = rect.height * this.zoomFactor;

    // We want the point under the cursor to be centered in the zoom window.
    // zoomResultSize equals how big the zoom box is (we set it same as main image width).
    const zoomW = this.zoomResultSize;
    const zoomH = this.zoomResultSize; // square

    // desired background top-left so cursor maps to center of zoom box:
    let desiredBgLeft = (cursorX * this.zoomFactor) - (zoomW / 2);
    let desiredBgTop = (cursorY * this.zoomFactor) - (zoomH / 2);

    // clamp so background does not show empty edges
    desiredBgLeft = Math.max(0, Math.min(desiredBgLeft, bgWidth - zoomW));
    desiredBgTop = Math.max(0, Math.min(desiredBgTop, bgHeight - zoomH));

    this.bgX = Math.round(desiredBgLeft);
    this.bgY = Math.round(desiredBgTop);

    // ensure zoomed image url is current
    this.zoomedImage = this.images[this.activeIndex];
  }

  onMouseLeave() {
    this.zoomActive = false;
  }

  // price helpers
  getDiscountedPrice(price: number, discount: number) {
    if (price == null) return '';
    const val = price - (price * (discount || 0)) / 100;
    return val.toFixed(2);
  }

  decreaseQty() { if (this.quantity > 1) this.quantity--; }
  increaseQty() { this.quantity++; }
  addToCart(product: any) { alert(`✅ ${product.title} added to cart!`); }

  // DEMO PRODUCTS with likes for rating display
  products = [
    {
      id: 1,
      title: 'Modern Wooden Chair',
      description:
        'A stylish wooden chair crafted from high-quality oak wood, designed for both comfort and long-lasting durability, perfect for modern living spaces.',
      price: 120,
      discount: 10,
      rating: 4,
      likes: 523,
      images: [
        'assets/images/topPicks-1.svg',
        'assets/images/topPicks-2.svg',
        'assets/images/topPicks-3.svg',
        'assets/images/topPicks-4.svg',
      ],
    },
    {
      id: 2,
      title: 'Elegant Sofa Set',
      description:
        'A luxurious sofa set with premium upholstery and firm cushions that add elegance, warmth, and style to any living room or modern home interior.',
      price: 499,
      discount: 25,
      rating: 5,
      likes: 1240,
      images: [
        'assets/images/topPicks-2.svg',
        'assets/images/topPicks-1.svg',
        'assets/images/topPicks-3.svg',
        'assets/images/topPicks-4.svg',
      ],
    },
    {
      id: 3,
      title: 'Classic Coffee Table',
      description:
        'An elegant wooden coffee table with a smooth finish, providing both functionality and a timeless design ideal for contemporary and classic interiors.',
      price: 220,
      discount: 15,
      rating: 4,
      likes: 875,
      images: [
        'assets/images/topPicks-3.svg',
        'assets/images/topPicks-1.svg',
        'assets/images/topPicks-2.svg',
        'assets/images/topPicks-4.svg',
      ],
    },
    {
      id: 4,
      title: 'Luxury Bed Frame',
      description:
        'A strong, modern bed frame with a sleek finish and solid base, offering excellent support and a premium look for your cozy bedroom space.',
      price: 799,
      discount: 30,
      rating: 5,
      likes: 1620,
      images: [
        'assets/images/topPicks-4.svg',
        'assets/images/topPicks-2.svg',
        'assets/images/topPicks-1.svg',
        'assets/images/topPicks-3.svg',
      ],
    },
    {
      id: 5,
      title: 'Minimalist Study Desk',
      description:
        'A minimalist study desk with spacious compartments and smooth edges, ideal for modern workspaces and designed to enhance your productivity and comfort.',
      price: 299,
      discount: 20,
      rating: 4,
      likes: 945,
      images: [
        'assets/images/topPicks-1.svg',
        'assets/images/topPicks-4.svg',
        'assets/images/topPicks-2.svg',
        'assets/images/topPicks-3.svg',
      ],
    },
    {
      id: 6,
      title: 'Ergonomic Office Chair',
      description:
        'Designed with adjustable height, soft cushions, and lumbar support, this ergonomic chair ensures comfort during long hours of work or study.',
      price: 189,
      discount: 18,
      rating: 5,
      likes: 1310,
      images: [
        'assets/images/topPicks-2.svg',
        'assets/images/topPicks-3.svg',
        'assets/images/topPicks-1.svg',
        'assets/images/topPicks-4.svg',
      ],
    },
    {
      id: 7,
      title: 'Contemporary Dining Table',
      description:
        'A spacious dining table made from premium hardwood, designed for six people, combining durability with modern aesthetics to elevate your dining area.',
      price: 649,
      discount: 22,
      rating: 5,
      likes: 980,
      images: [
        'assets/images/topPicks-3.svg',
        'assets/images/topPicks-1.svg',
        'assets/images/topPicks-2.svg',
        'assets/images/topPicks-4.svg',
      ],
    },
    {
      id: 8,
      title: 'Cozy Armchair',
      description:
        'A plush, cozy armchair with thick padding and soft linen fabric, offering a comfortable seating experience for reading, relaxing, or casual lounging.',
      price: 250,
      discount: 12,
      rating: 4,
      likes: 712,
      images: [
        'assets/images/topPicks-4.svg',
        'assets/images/topPicks-2.svg',
        'assets/images/topPicks-3.svg',
        'assets/images/topPicks-1.svg',
      ],
    },
    {
      id: 9,
      title: 'Decorative Floor Lamp',
      description:
        'A sleek floor lamp with warm LED lighting and metallic finish, ideal for adding charm, brightness, and modern elegance to your room décor.',
      price: 149,
      discount: 8,
      rating: 4,
      likes: 640,
      images: [
        'assets/images/topPicks-1.svg',
        'assets/images/topPicks-3.svg',
        'assets/images/topPicks-4.svg',
        'assets/images/topPicks-2.svg',
      ],
    },
  ];

}
