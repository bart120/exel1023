import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [],

  exports: [
    InputTextModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class UIModule { }
