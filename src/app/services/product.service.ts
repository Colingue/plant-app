import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 29.99,
      imageUrl: '/images/monstera.png',
      description:
        'Une plante tropicale avec des feuilles larges et perforées.',
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      price: 39.99,
      imageUrl: '/images/monstera.png',
      description:
        'Grande plante élégante avec des feuilles en forme de violon.',
    },
    {
      id: 3,
      name: 'Snake Plant',
      price: 19.99,
      imageUrl: '/images/monstera.png',
      description: 'Facile d’entretien, parfaite pour purifier l’air.',
    },
    {
      id: 4,
      name: 'Peace Lily',
      price: 24.99,
      imageUrl: '/images/monstera.png',
      description: 'Plante élégante avec des fleurs blanches délicates.',
    },
    {
      id: 5,
      name: 'Pothos',
      price: 14.99,
      imageUrl: '/images/monstera.png',
      description: 'Plante grimpante facile à entretenir.',
    },
    {
      id: 6,
      name: 'Spider Plant',
      price: 12.99,
      imageUrl: '/images/monstera.png',
      description: 'Plante robuste avec des feuilles arquées.',
    },
    {
      id: 7,
      name: 'Aloe Vera',
      price: 9.99,
      imageUrl: '/images/monstera.png',
      description: 'Plante succulente connue pour ses propriétés apaisantes.',
    },
    {
      id: 8,
      name: 'Rubber Plant',
      price: 34.99,
      imageUrl: '/images/monstera.png',
      description:
        'Plante d’intérieur avec des feuilles brillantes et épaisses.',
    },
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    const product = this.products.find((product) => product.id === id);
    return product ? { ...product } : undefined;
  }
}
