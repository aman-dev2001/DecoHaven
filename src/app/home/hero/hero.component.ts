import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ✅ necessary for swiper web components
})
export class HeroComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // ✅ Select the Swiper container safely
    const swiperEl = document.querySelector('swiper-container') as any;

    if (!swiperEl) {
      console.warn('Swiper element not found!');
      return;
    }

    // ✅ Assign Swiper configuration
    swiperEl.params = {
      loop: true,
      speed: 1200,
      parallax: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'slide',
    };

    // ✅ Initialize swiper (required for Web Components)
    swiperEl.initialize();

    // ✅ Apply background images from data-background attributes
    const slides = swiperEl.querySelectorAll('.slide-bg-image');

    slides.forEach((slide: HTMLElement) => {
      const bg = slide.getAttribute('data-background');
      if (bg) {
        slide.style.backgroundImage = `url(${bg})`;
        slide.style.backgroundSize = 'cover';
        slide.style.backgroundPosition = 'center';
      }
    });
  }
}
