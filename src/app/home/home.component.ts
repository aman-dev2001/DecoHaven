import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { InstagramComponent } from './instagram/instagram.component';
import { OurBlogsComponent } from './our-blogs/our-blogs.component';
import { FeatureProductComponent } from '../shared/feature-product/feature-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    FeatureCardComponent,
    FeatureProductComponent,
    NewArrivalComponent,
    OurBlogsComponent,
    InstagramComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
