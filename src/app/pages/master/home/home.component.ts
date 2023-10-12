import { Component, OnInit } from '@angular/core';
import { BrandModel } from 'src/app/models/brand.model';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  brands: BrandModel[] = [];
  //private brandServ: BrandsService;

  constructor(private brandServ: BrandsService) {
    //this.brandServ = brandServ;
  }

  ngOnInit(): void {
    //this.brands = this.brandServ.getBrands(); NO
    this.brandServ.getBrands().subscribe(data => {
      this.brands = data;
    });
  }





}
