import {Component, OnInit} from '@angular/core';


import { CarService} from 'car.service';
import { Car } from 'car.model';

@Component({
  selector: 'app-ListPage10000',
  templateUrl: './ListPage10000.component.html',
})
export class ListPage10000Component implements OnInit {
  cars: Car[] = [];
  allColorsSet = false;
  carsFilteredByBrand = false;
  carsAmount = 0;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCars(10000);
  }

  setAllColorsToRed() {
    this.cars.forEach(car => car.color = 'Red');
    this.allColorsSet = true;
  }

  toggleSortByBrand() {
    this.cars.sort((a, b) => a.brand.localeCompare(b.brand));
    this.carsFilteredByBrand = !this.carsFilteredByBrand;
  }

  GetMoreCars(amount: number) {
    const moreCars =  this.carService.getCars(amount);
    if (this.cars) {
      this.cars.push(...moreCars);
      this.carsAmount += amount;
    }
  }

  DeleteAddedCarsWith() {
    if (this.cars) {
      this.cars.splice(this.cars.length - this.carsAmount, this.carsAmount);
      this.carsAmount = 0;
    }
  }
}
