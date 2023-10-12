import { NgModule } from '@angular/core';
import { CarsAddComponent } from './cars-add/cars-add.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    { path: 'add', component: CarsAddComponent, },
    { path: 'detail/:id/:name', component: CarsDetailComponent },
    { path: '', component: CarsListComponent }
]

@NgModule({
    declarations: [

    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CarsRoutingModule { }
