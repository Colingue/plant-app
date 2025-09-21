import { Component, inject, OnInit, signal } from '@angular/core';
import { Plant } from '../../models/plant.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase/supabase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private supabaseService = inject(SupabaseService);
  private router = inject(Router);

  products: Plant[] = [];
  rarityFilter = signal<string>('');
  searchQuery = signal<string>('');

  async ngOnInit(): Promise<void> {
    await this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    try {
      this.products = await this.supabaseService.getPlants({
        rarity:
          this.rarityFilter() === 'tout' ? undefined : this.rarityFilter(),
        search: this.searchQuery(),
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des plantes :', error);
    }
  }

  async onFilterChange(): Promise<void> {
    await this.loadProducts();
  }

  goOnPlantPage(product: Plant): void {
    this.router.navigate(['/plant', product.id]);
  }
}
