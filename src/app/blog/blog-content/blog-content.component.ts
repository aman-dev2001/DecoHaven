import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent {
  posts = [
    {
      image: 'assets/images/ourblogposter-1.svg',
      admin: 'Admin',
      date: '14 Oct 2022',
      category: 'Wood',
      title: 'Going all-in with millennial design',
      excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.`
    },
    {
      image: 'assets/images/ourblogposter-2.svg',
      admin: 'Admin',
      date: '14 Oct 2022',
      category: 'Handmade',
      title: 'Exploring new ways of decorating',
      excerpt: `Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.`
    },
    {
      image: 'assets/images/ourblogposter-3.svg',
      admin: 'Admin',
      date: '14 Oct 2022',
      category: 'Crafts',
      title: 'Handmade pieces that took time to make',
      excerpt: `Pharetra et ultrices neque ornare aenean euismod elementum. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.`
    }
  ];
}
