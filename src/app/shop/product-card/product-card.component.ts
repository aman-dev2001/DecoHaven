import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(private router: Router) {}

  products = [
    { id: 1, title: 'Modern Wooden Chair', description: 'A stylish wooden chair designed for comfort and durability.', price: 120, discount: 10, rating: 4, image: 'assets/images/topPicks-1.svg' },
    { id: 2, title: 'Elegant Sofa Set', description: 'A luxury sofa set with premium fabric for your living room.', price: 499, discount: 25, rating: 5, image: 'assets/images/topPicks-2.svg' },
    { id: 3, title: 'Minimalist Lamp', description: 'A minimal lamp perfect for modern and aesthetic spaces.', price: 89, discount: 0, rating: 3, image: 'assets/images/topPicks-4.svg' },
    { id: 4, title: 'Stylish Office Chair', description: 'Ergonomic office chair perfect for long working hours.', price: 199, discount: 15, rating: 4, image: 'assets/images/topPicks-1.svg' },
    { id: 5, title: 'Luxury Sofa', description: 'A premium sofa that upgrades your living room instantly.', price: 580, discount: 10, rating: 5, image: 'assets/images/topPicks-2.svg' },
    { id: 6, title: 'Wooden Bookshelf', description: 'A modern wooden bookshelf built with premium oak wood.', price: 350, discount: 18, rating: 4, image: 'assets/images/topPicks-3.svg' },
    { id: 7, title: 'Classic Armchair', description: 'A comfortable armchair with soft fabric and wooden arms.', price: 180, discount: 12, rating: 4, image: 'assets/images/topPicks-4.svg' },
    { id: 8, title: 'Bedside Lamp', description: 'A soft, warm bedside lamp that suits every bedroom theme.', price: 70, discount: 0, rating: 3, image: 'assets/images/topPicks-3.svg' },
    { id: 9, title: 'Metal Pendant Light', description: 'A stylish hanging pendant light for modern interiors.', price: 110, discount: 20, rating: 4, image: 'assets/images/topPicks-1.svg' }
  ];

  // ✅ Wishlist Array
  wishlist: any[] = [];

  ngOnInit() {
    this.loadWishlist();
  }

  // ✅ Load wishlist from localStorage
  loadWishlist() {
    const stored = localStorage.getItem('wishlist');
    this.wishlist = stored ? JSON.parse(stored) : [];
  }

  // ✅ Check if product is in wishlist
  isInWishlist(product: any) {
    return this.wishlist.some((item: any) => item.id === product.id);
  }

  // ✅ Toggle Wishlist (Add / Remove)
  toggleWishlist(product: any) {
    if (this.isInWishlist(product)) {
      this.wishlist = this.wishlist.filter((item: any) => item.id !== product.id);
    } else {
      this.wishlist.push(product);
    }
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  // Stars
  getStars() {
    return [1, 2, 3, 4, 5];
  }

  // Discount price
  getDiscountedPrice(price: number, discount: number) {
    if (!discount || discount === 0) return price;
    return (price - (price * discount) / 100).toFixed(2);
  }

  // Navigate to product detail page
  goToDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}
