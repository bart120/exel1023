import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/master/home/home.component';
import { NotFoundComponent } from './pages/master/not-found/not-found.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '404', component: NotFoundComponent },


  /*{
    path: 'cars', children: [
      { path: 'add', component: CarsAddComponent, },
      { path: 'detail/:id/:name', component: CarsDetailComponent },
      { path: '', component: CarsListComponent }
    ]
  },*/
  { path: 'cars', loadChildren: () => import('./pages/cars/cars.module').then(x => x.CarsModule), canActivate: [AuthenticationGuard] },


  { path: 'auth/login', component: LoginComponent, title: 'routelogin' },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
