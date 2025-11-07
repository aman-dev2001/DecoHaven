import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { BlogPaginationComponent } from './blog-pagination/blog-pagination.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogRecentPostsComponent } from './blog-recent-posts/blog-recent-posts.component';
import { CommonHeroSectionComponent } from '../shared/common-hero-section/common-hero-section.component'; // ✅ add this import
import { CommonFooterInfoSectionComponent } from '../shared/common-footer-info-section/common-footer-info-section.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    BlogContentComponent,
    BlogPaginationComponent,
    BlogSidebarComponent,
    BlogRecentPostsComponent,
    CommonHeroSectionComponent,
    CommonFooterInfoSectionComponent
    // ✅ import hero section here
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {}
