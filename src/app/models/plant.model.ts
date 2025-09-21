export interface Plant {
  id: number;
  name: string;
  commonName: string;
  scientificName: string;
  price: number;
  imageUrl: string;
  description?: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary';

  care: {
    difficulty: 'Easy' | 'Medium' | 'Hard';
    light: 'Low' | 'Medium' | 'High';
    wateringFrequency: 'Rare' | 'Moderate' | 'Frequent';
    temperatureRange: string;
  };
}
