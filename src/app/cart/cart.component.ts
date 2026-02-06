import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CommonHeroSectionComponent } from '../shared/common-hero-section/common-hero-section.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartDetailComponent, CommonHeroSectionComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

}
