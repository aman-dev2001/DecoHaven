import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-pagination.component.html',
  styleUrls: ['./blog-pagination.component.css']
})
export class BlogPaginationComponent {
  currentPage = 1;
  pages = [1, 2, 3];

  setPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
  }
}
