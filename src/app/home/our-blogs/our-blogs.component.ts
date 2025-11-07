import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-blogs',
  standalone: true, // ✅ Required for standalone component
  imports: [CommonModule],
  templateUrl: './our-blogs.component.html',
  styleUrls: ['./our-blogs.component.css'] // ✅ Correct property name is 'styleUrls'
})
export class OurBlogsComponent {
  blogs = [
    {
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12th Oct 2022',
      img: 'assets/images/ourBlog-1.svg'
    },
    {
      title: 'Exploring modern furniture trends',
      time: '5 min',
      date: '12th Oct 2022',
      img: 'assets/images/ourBlog-2.svg'
    },
    {
      title: 'Designing spaces that tell stories',
      time: '5 min',
      date: '12th Oct 2022',
      img: 'assets/images/ourBlog-3.svg'
    }
  ];
}
