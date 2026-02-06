import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
})
export class OtpVerificationComponent {
  otpValues: string[] = ['', '', '', ''];

  moveFocus(event: any, index: number) {
    const input = event.target;
    if (input.value.length === 1 && index < this.otpValues.length - 1) {
      const nextInput = input.parentElement.nextElementSibling?.querySelector('input');
      nextInput?.focus();
    }
  }

  onSubmit() {
    const otp = this.otpValues.join('');
    console.log('Entered OTP:', otp);
    alert(`Your OTP is ${otp}`);
  }

  resendOtp() {
    alert('OTP has been resent successfully!');
  }
}
