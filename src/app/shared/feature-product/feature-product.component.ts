import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureProductComponent implements AfterViewInit {
  products = [
    { image: 'assets/images/topPicks-1.svg', title: 'Modern Wooden Chair', price: '1200' },
    { image: 'assets/images/topPicks-2.svg', title: 'Stylish Sofa', price: '2499' },
    { image: 'assets/images/topPicks-3.svg', title: 'Classic Lamp', price: '799' },
    { image: 'assets/images/topPicks-4.svg', title: 'Comfort Bed', price: '4999' },
    { image: 'assets/images/topPicks-1.svg', title: 'Dining Table', price: '3299' },
    { image: 'assets/images/topPicks-2.svg', title: 'Office Chair', price: '1799' }
  ];

  ngAfterViewInit() {
    const swiperEl: any = document.querySelector('.custom-swiper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (swiperEl && prevBtn && nextBtn) {
      swiperEl.initialize();
      prevBtn.addEventListener('click', () => swiperEl.swiper.slidePrev());
      nextBtn.addEventListener('click', () => swiperEl.swiper.slideNext());
    }
  }
}
