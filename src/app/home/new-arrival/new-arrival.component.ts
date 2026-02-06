import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// ✅ required for *ngIf, *ngFor, etc.

@Component({
  selector: 'app-new-arrival',
  standalone: true, // ✅ required for standalone component]
  imports: [RouterModule],
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css'] // ✅ correct property name (plural)
})
export class NewArrivalComponent {

}
