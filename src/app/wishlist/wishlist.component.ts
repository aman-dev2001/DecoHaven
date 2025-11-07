import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeroSectionComponent } from '../shared/common-hero-section/common-hero-section.component';
import { WishlistDetailComponent } from './wishlist-detail/wishlist-detail.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    CommonModule,
    WishlistDetailComponent,
    CommonHeroSectionComponent
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

}
