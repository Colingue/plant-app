export interface Plant {
  id: number;
  name: string;
  commonName: string;
  scientificName: string;
  imageUrl: string;
  description?: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  careWatering: number;
  careDifficulty: number;
  careLight: number;
}
