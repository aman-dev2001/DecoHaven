import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component'
import { WishlistComponent } from './wishlist/wishlist.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-detail/product-detail.component')
        .then(m => m.ProductDetailComponent),
  },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
];
