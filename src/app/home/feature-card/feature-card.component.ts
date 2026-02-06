import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // RouterModule import karna zaroori hai

@Component({
  selector: 'app-feature-card',
  standalone: true,                // Standalone component hona chahiye
  imports: [RouterModule],         // RouterModule yaha add kare
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css'] // styleUrls, styleUrl nahi
})
export class FeatureCardComponent {

}
