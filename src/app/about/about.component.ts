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
export class AboutComponent {  stats = [
    { value: '8+', label: 'Years of Excellence' },
    { value: '5000+', label: 'Happy Customers' },
    { value: '100+', label: 'Team Members' },
    { value: '300+', label: 'Global Products' }
  ];

  team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'James Parker',
      role: 'Creative Director',
      img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Emily Davis',
      role: 'Lead Developer',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Michael Brown',
      role: 'Marketing Head',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    }
  ];
}