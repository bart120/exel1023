import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { CarsModule } from './pages/cars/cars.module';
import { MasterModule } from './pages/master/master.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import '@angular/common/locales/global/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIModule } from './shared/ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MasterModule,
    MenubarModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    UIModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
