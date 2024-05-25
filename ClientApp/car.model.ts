export enum FuelType {
  Gasoline,
  Diesel,
  Electric,
  Hybrid
}

export class Car {
  public brand: string;
  public model: string;
  public color: string;
  public fuelType: FuelType;
  public releaseYear: number;

  constructor({ brand, model, color, fuelType, releaseYear }: {
    brand: string,
    model: string,
    color: string,
    fuelType: FuelType,
    releaseYear: number
  }) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.fuelType = fuelType;
    this.releaseYear = releaseYear;
  }
}
