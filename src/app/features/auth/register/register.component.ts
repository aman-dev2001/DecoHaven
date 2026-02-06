import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // ✅ RouterLink added here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  progress = 66;

  registerData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    console.log('Registration Data:', this.registerData);
  }
}
