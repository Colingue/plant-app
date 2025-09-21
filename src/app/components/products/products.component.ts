import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Plant } from '../../models/plant.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  private router = inject(Router);

  products: Plant[] = [];

  ngOnInit(): void {
    this.products = this.productService.getPlants();
  }

  goOnPlantPage(product: Plant): void {
    this.router.navigate(['/plant', product.id]);
  }
}
