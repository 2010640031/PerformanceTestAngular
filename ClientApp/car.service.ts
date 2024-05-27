import { Injectable } from '@angular/core';
import { Car, FuelType } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private brands = ['Toyota', 'Ford', 'BMW', 'Tesla', 'Chevrolet', 'Honda'];
  private colors = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Green'];
  private models: Models = {
    'Toyota': ['Corolla', 'Camry', 'RAV4'],
    'Ford': ['Fiesta', 'Focus', 'Mustang'],
    'BMW': ['320', 'X5', 'M3'],
    'Tesla': ['Model S', 'Model 3', 'Model X'],
    'Chevrolet': ['Impala', 'Camaro', 'Silverado'],
    'Honda': ['Civic', 'Accord', 'CR-V']
  };

  constructor() {}

  getAll(count: number = 10000): Car[] {
    const cars = [];
    for (let i = 0; i < count; i++) {
      let brand = this.brands[Math.floor(Math.random() * this.brands.length)];
      cars.push(new Car({
        brand: brand,
        model: this.pickRandomModel(brand),
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        fuelType: FuelType.Gasoline,
        releaseYear: Math.floor(Math.random() * (2024 - 1990) + 1990)
      }));
    }
    return cars;
  }

  private pickRandomModel(brand: string): string {
    return this.models[brand][Math.floor(Math.random() * this.models[brand].length)];
  }
}

interface Models {
  [key: string]: string[];
}
