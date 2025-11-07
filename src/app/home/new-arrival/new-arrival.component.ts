import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ required for *ngIf, *ngFor, etc.

@Component({
  selector: 'app-new-arrival',
  standalone: true, // ✅ required for standalone component
  imports: [CommonModule], // ✅ required if you’ll use Angular directives in HTML
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css'] // ✅ correct property name (plural)
})
export class NewArrivalComponent {

}
