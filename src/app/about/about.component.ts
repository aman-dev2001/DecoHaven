import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeroSectionComponent } from '../shared/common-hero-section/common-hero-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CommonHeroSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {  

}