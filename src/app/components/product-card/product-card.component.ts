import { Component, Input } from '@angular/core';
import { Plant } from '../../models/plant.model';
import { RarityBadgeComponent } from '../rarity-badge/rarity-badge.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  imports: [RarityBadgeComponent],
})
export class ProductCardComponent {
  @Input() plant!: Plant;
}
