import { Injectable } from '@angular/core';
import { Plant } from '../models/plant.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Plant[] = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 29.99,
      imageUrl: '/images/monstera.png',
      description:
        'Une plante tropicale avec des feuilles larges et perforées.',
      commonName: '',
      scientificName: '',
      rarity: 'Common',
      care: {
        difficulty: 'Easy',
        light: 'Medium',
        wateringFrequency: 'Rare',
        temperatureRange: '',
      },
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      price: 39.99,
      imageUrl: '/images/monstera.png',
      description:
        'Grande plante élégante avec des feuilles en forme de violon.',
      commonName: '',
      scientificName: '',
      rarity: 'Common',
      care: {
        difficulty: 'Easy',
        light: 'Medium',
        wateringFrequency: 'Rare',
        temperatureRange: '',
      },
    },
    {
      id: 3,
      name: 'Snake Plant',
      price: 19.99,
      imageUrl: '/images/monstera.png',
      description: 'Facile d’entretien, parfaite pour purifier l’air.',
      commonName: '',
      scientificName: '',
      rarity: 'Common',
      care: {
        difficulty: 'Easy',
        light: 'Medium',
        wateringFrequency: 'Rare',
        temperatureRange: '',
      },
    },
    {
      id: 4,
      name: 'Peace Lily',
      price: 24.99,
      imageUrl: '/images/monstera.png',
      description: 'Plante élégante avec des fleurs blanches délicates.',
      commonName: '',
      scientificName: '',
      rarity: 'Common',
      care: {
        difficulty: 'Easy',
        light: 'Medium',
        wateringFrequency: 'Rare',
        temperatureRange: '',
      },
    },
    {
      id: 5,
      name: 'Pothos',
      price: 14.99,
      imageUrl: '/images/monstera.png',
      description: 'Plante grimpante facile à entretenir.',
      commonName: '',
      scientificName: '',
      rarity: 'Common',
      care: {
        difficulty: 'Easy',
        light: 'Medium',
        wateringFrequency: 'Rare',
        temperatureRange: '',
      },
    },
  ];

  getPlants(): Plant[] {
    return [...this.products];
  }

  getPlantById(id: number): Plant | undefined {
    const product = this.products.find((product) => product.id === id);
    return product ? { ...product } : undefined;
  }
}
