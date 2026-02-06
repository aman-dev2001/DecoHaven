import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-hero-section.component.html',
  styleUrls: ['./common-hero-section.component.css']
})
export class CommonHeroSectionComponent {
  /** Dynamic page title */
  @Input() title: string = '';

  /** Background image (same or custom per page) */
  @Input() backgroundImage: string = 'assets/img/hero-bg.jpg';

  /** Breadcrumb items, e.g. ['Home', 'Blog'] */
  @Input() breadcrumbs: string[] = ['Home'];
}
