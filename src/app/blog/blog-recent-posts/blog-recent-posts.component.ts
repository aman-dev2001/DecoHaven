import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

@Component({
  selector: 'app-blog-recent-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-recent-posts.component.html',
  styleUrls: ['./blog-recent-posts.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogRecentPostsComponent implements AfterViewInit {
  recentPosts = [
    { title: 'Going all-in with millennial design', date: '03 Aug 2022', image: 'assets/images/resentblog-1.svg' },
    { title: 'Exploring new ways of decorating', date: '03 Aug 2022', image: 'assets/images/resentblog-2.svg' },
    { title: 'Handmade pieces that took time to make', date: '03 Aug 2022', image: 'assets/images/resentblog-3.svg' },
    { title: 'Modern home in Milan', date: '03 Aug 2022', image: 'assets/images/resentblog-4.svg' },
    { title: 'Colorful office redesign', date: '03 Aug 2022', image: 'assets/images/resentblog-5.svg' }
  ];

  ngAfterViewInit(): void {
    new Swiper('.recentSwiper', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2000, // slower speed between slides
        disableOnInteraction: false,
      },
      speed: 900, // smooth transition duration
      slidesPerView: 3, // shows two posts at once
      spaceBetween: 42,
      modules: [Autoplay],
    });
  }
}
