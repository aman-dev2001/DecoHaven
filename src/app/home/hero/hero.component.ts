import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {

  slides = [
    {
      title: 'Modern Furniture For Elegfghjkl;ant Living',
      text: 'Curated collections to bring style and comfort to your home.',
      btn1: { text: 'Shop Now', link: '/shop' },
      btn2: { text: 'Learn More', link: '/about' },
      img: 'https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
    },
    {
      title: 'Premium Sofa Collections',
      text: 'Luxury and comfort, designed to elevate every living space.',
      btn1: { text: 'Explore Collection', link: '/shop' },
      btn2: { text: 'Contact Us', link: '/contact' },
      img: 'https://plus.unsplash.com/premium_photo-1661924432476-25039a9a9c5f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1193'
    },
    {
      title: 'Stylish Lighting For Every Room',
      text: 'Illuminate your home with our curated modern lighting collection.',
      btn1: { text: 'Browse Lights', link: '/products' },
      btn2: { text: 'Learn More', link: '/about' },
      img: 'https://plus.unsplash.com/premium_photo-1661915759180-210f2f58cc41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331'
    },
    {
      title: 'Transform Your Home With Elegant Designs',
      text: 'Add warmth, style, and sophistication to every corner.',
      btn1: { text: 'Start Shopping', link: '/shop' },
      btn2: { text: 'Get Info', link: '/contact' },
      img: 'https://plus.unsplash.com/premium_photo-1661962494518-4c1fe7d8c2a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1154'
    }
  ];


  currentSlide = 0;
  private slideInterval: any;

  ngOnInit() {
    // ✅ Auto slide every 5 seconds
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy() {
    // ✅ Clear interval when component is destroyed
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
