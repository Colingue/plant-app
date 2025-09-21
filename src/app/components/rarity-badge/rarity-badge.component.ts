import { Component, Input } from '@angular/core';
import { NgClass } from '../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';

@Component({
  selector: 'app-rarity-badge',
  imports: [],
  templateUrl: './rarity-badge.component.html',
  styleUrl: './rarity-badge.component.scss',
})
export class RarityBadgeComponent {
  @Input() rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' = 'Common';
}
