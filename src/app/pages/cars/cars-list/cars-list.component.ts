import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styles: [
  ]
})
export class CarsListComponent implements OnInit {
  cars: Array<CarModel> = []

  constructor(private servCar: CarsService) { }

  ngOnInit(): void {
    this.servCar.getCars().subscribe(data => { this.cars = data; console.log(data) });
  }

}
