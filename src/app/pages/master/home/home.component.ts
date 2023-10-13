import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BrandModel } from 'src/app/models/brand.model';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  sub: Subscription | null = null;
  brands: BrandModel[] = [];
  //private brandServ: BrandsService;

  constructor(private brandServ: BrandsService) {
    //this.brandServ = brandServ;

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    //console.log("début ngoninit");
    //this.brands = this.brandServ.getBrands();
    this.sub = this.brandServ.getBrands().subscribe(data => {
      this.brands = data;

    });
    //console.log("fin ngoninit");
  }





}
