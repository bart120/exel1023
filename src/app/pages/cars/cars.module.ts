import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsAddComponent } from './cars-add/cars-add.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { CarsRoutingModule } from './cars-routing.module';
import { UIModule } from 'src/app/shared/ui/ui.module';



@NgModule({
  declarations: [
    CarsAddComponent,
    CarsListComponent,
    CarsDetailComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    UIModule
  ]
})
export class CarsModule { }
