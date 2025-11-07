import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-footer-info-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-footer-info-section.component.html',
  styleUrls: ['./common-footer-info-section.component.css']
})
export class CommonFooterInfoSectionComponent {
  services = [
    {
      title: 'Free Delivery',
      text: 'For all orders over $50, consectetur adipim scing elit.'
    },
    {
      title: '90 Days Return',
      text: 'If goods have problems, consectetur adipim scing elit.'
    },
    {
      title: 'Secure Payment',
      text: '100% secure payment, consectetur adipim scing elit.'
    }
  ];
}
