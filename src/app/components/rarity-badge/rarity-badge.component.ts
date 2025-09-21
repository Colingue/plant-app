import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rarity-badge',
  imports: [NgClass],
  templateUrl: './rarity-badge.component.html',
  styleUrl: './rarity-badge.component.scss',
})
export class RarityBadgeComponent {
  @Input() rarity: 'common' | 'uncommon' | 'rare' | 'legendary' = 'common';
}
