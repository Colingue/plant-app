import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from '../../models/plant.model';
import { Subscription } from 'rxjs';
import { SupabaseService } from '../../services/supabase/supabase.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  plantId: number | null = null;
  plant = signal<Plant | null>(null);

  private supabaseService = inject(SupabaseService);

  private route = inject(ActivatedRoute);

  routeSubscription: Subscription | null = null;

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(async (params) => {
      this.plantId = Number(params.get('id'));
      if (this.plantId !== null) {
        const fetchedPlant = await this.supabaseService.getPlantById(
          this.plantId
        );
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
