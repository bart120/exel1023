import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  providers: [
  ]
})
export class MasterModule { }
