import {Component, OnInit} from '@angular/core';


import { CarService} from 'car.service';
import { Car } from 'car.model';

@Component({
  selector: 'app-listPage',
  templateUrl: './listPage.component.html',
})
export class ListPageComponent implements OnInit {
  cars: Car[] = [];
  allColorsSet = false;
  carsFilteredByBrand = false;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getAll();
  }

  setAllColorsToChroma() {
    this.cars.forEach(car => car.color = 'Chroma');
    this.allColorsSet = true;
  }

  toggleSortByBrand() {
    this.cars.sort((a, b) => a.brand.localeCompare(b.brand));
    this.carsFilteredByBrand = !this.carsFilteredByBrand;
  }
}
