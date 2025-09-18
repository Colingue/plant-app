import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  { path: 'plants', component: ProductsComponent },
  { path: 'plant/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: '/plants', pathMatch: 'full' },
  { path: '**', redirectTo: '/plants' },
];
