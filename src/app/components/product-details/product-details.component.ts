import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  plantId: number | null = null;
  plant = signal<Product | null>(null);

  plantService = inject(ProductService);

  private route = inject(ActivatedRoute);

  routeSubscription: Subscription | null = null;

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      this.plantId = Number(params.get('id'));
      if (this.plantId !== null) {
        const fetchedPlant = this.plantService.getProductById(this.plantId);
        if (fetchedPlant) {
          this.plant.set(fetchedPlant);
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
