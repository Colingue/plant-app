export interface Plant {
  id: number;
  name: string;
  commonName: string;
  scientificName: string;
  price: number;
  imageUrl: string;
  description?: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';

  care: {
    difficulty: 'Easy' | 'Medium' | 'Hard';
    light: 'Low' | 'Medium' | 'High';
    wateringFrequency: 'Rare' | 'Moderate' | 'Frequent';
    temperatureRange: string;
  };
}
