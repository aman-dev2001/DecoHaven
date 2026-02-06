import { Component } from '@angular/core';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonHeroSectionComponent } from '../shared/common-hero-section/common-hero-section.component';
import { CommonFooterInfoSectionComponent } from '../shared/common-footer-info-section/common-footer-info-section.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    FilterBarComponent,
    ProductCardComponent,
    PaginationComponent,
    CommonHeroSectionComponent,
    CommonFooterInfoSectionComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {}
