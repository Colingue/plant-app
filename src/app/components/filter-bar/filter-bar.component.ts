import { Component, Output, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  imports: [FormsModule],
})
export class FilterBarComponent {
  onFilterChange = output<{
    rarity: string;
    search: string;
  }>();

  rarity: string = '';
  search: string = '';

  onRarityChange(newRarity: string): void {
    this.rarity = newRarity;
    this.emitFilterChange();
  }

  onSearchChange(newSearch: string): void {
    this.search = newSearch;
    this.emitFilterChange();
  }

  emitFilterChange(): void {
    this.onFilterChange.emit({ rarity: this.rarity, search: this.search });
  }
}
