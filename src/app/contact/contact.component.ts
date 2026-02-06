import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonHeroSectionComponent } from '../shared/common-hero-section/common-hero-section.component';
import { CommonFooterInfoSectionComponent } from '../shared/common-footer-info-section/common-footer-info-section.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, CommonHeroSectionComponent, CommonFooterInfoSectionComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.contactData);
    alert('Thank you for contacting us!');
  }
}
