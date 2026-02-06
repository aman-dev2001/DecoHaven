import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Needed for [(ngModel)]
import { RouterLink } from '@angular/router'; // ✅ Needed for routerLink

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // 👈 All required modules here
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';

  onSubscribe(event: Event) {
    event.preventDefault();
    if (this.email.trim()) {
      console.log('Subscribed email:', this.email);
      alert(`Thanks for subscribing, ${this.email}!`);
      this.email = '';
    }
  }
}
