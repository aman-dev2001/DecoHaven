import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const swiper = new Swiper('.hero-swiper', {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      on: {
        // ✅ Correct typing and usage
        slideChangeTransitionStart(swiper) {
          const slides = document.querySelectorAll<HTMLElement>('.swiper-slide');
          slides.forEach((slide) => {
            const bg = slide.getAttribute('data-background');
            if (bg) {
              slide.style.backgroundImage = `url(${bg})`;
            }
          });
        },
      },
    });

    // ✅ Set initial background
    const slides = document.querySelectorAll<HTMLElement>('.swiper-slide');
    slides.forEach((slide) => {
      const bg = slide.getAttribute('data-background');
      if (bg) {
        slide.style.backgroundImage = `url(${bg})`;
      }
    });
  }
}
