import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.css']
})
export class WishlistDetailComponent implements OnInit {

  wishlist: any[] = [];
  cartItems: any[] = [];

  ngOnInit(): void {
    this.loadWishlist();
  }

  // ✅ Load wishlist data
  loadWishlist() {
    const data = localStorage.getItem('wishlistItems');
    this.wishlist = data ? JSON.parse(data) : [];
  }

  // ✅ Remove item
  removeItem(index: number) {
    this.wishlist.splice(index, 1);
    localStorage.setItem('wishlistItems', JSON.stringify(this.wishlist));
  }

  // ✅ Move item to cart
  moveToCart(item: any, index: number) {
    const cartData = localStorage.getItem('cartItems');
    this.cartItems = cartData ? JSON.parse(cartData) : [];

    // ✅ Check if already exist in cart
    const exist = this.cartItems.find(p => p.id === item.id);

    if (exist) {
      exist.qty += 1;
    } else {
      this.cartItems.push({ ...item, qty: 1 });
    }

    // ✅ Save updated cart
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

    // ✅ Remove from wishlist
    this.removeItem(index);
  }

}
