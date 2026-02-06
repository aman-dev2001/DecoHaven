import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// ✅ Swiper Web Components import
import { register } from 'swiper/element/bundle';

// ✅ Register swiper custom elements globally
register();

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
