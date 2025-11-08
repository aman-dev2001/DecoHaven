import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-blogs.component.html',
  styleUrls: ['./our-blogs.component.css']
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

