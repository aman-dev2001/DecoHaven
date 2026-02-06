import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  totalResults = 32;
  perPage = 16;
  viewMode: 'grid' | 'list' = 'grid';
  sortOption = 'Default';

  toggleView(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  onSortChange(event: any) {
    this.sortOption = event.target.value;
  }
}
