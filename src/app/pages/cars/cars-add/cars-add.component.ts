import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrandModel } from 'src/app/models/brand.model';
import { BrandsService } from 'src/app/services/brands.service';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styles: [
  ]
})
export class CarsAddComponent implements OnInit {


  brands: Array<BrandModel> = [];
  formCar: FormGroup;

  constructor(private servBrand: BrandsService, private servCar: CarsService) {
    this.formCar = new FormGroup(
      {
        model: new FormControl('bob', [Validators.required, Validators.min(3)]),
        price: new FormControl(0),
        dateOfCirculation: new FormControl('', [Validators.required]),
        brandID: new FormControl('', [Validators.required])
      }
    );
  }

  ngOnInit(): void {
    this.servBrand.getBrands().subscribe(data => this.brands = data);
  }

  onSubmit(): void {
    console.log(this.formCar.value);
    this.servCar.saveCar(this.formCar.value).subscribe(data => {
      alert(`Voiture ${data.id} ajoutée.`);
    });
  }
}
