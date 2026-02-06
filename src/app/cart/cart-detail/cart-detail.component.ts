import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cartItems: any[] = [];
  totalAmount: number = 0;

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    const data = localStorage.getItem('cartItems');
    this.cartItems = data ? JSON.parse(data) : [];

    this.cartItems = this.cartItems.map(item => ({
      ...item,
      qty: item.qty ? item.qty : 1
    }));
    this.updateTotal();
  }

  increaseQty(item: any) {
    item.qty++;
    this.saveCart();
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.saveCart();
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.updateTotal();
  }

  updateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) =>
      sum + (item.price * item.qty), 0
    );
  }
}
