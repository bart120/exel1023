import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from './services/authentication.service';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exel1024';
  items: MenuItem[] | undefined;
  user?: UserModel;

  constructor(private authServ: AuthenticationService) {

  }

  logout() {
    this.authServ.logout();
  }

  ngOnInit() {
    this.authServ.user$.subscribe(user => {
      this.user = user;
    });
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        routerLink: '/home'

      },
      {
        label: 'Voitures',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Ajouter',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/cars/add'
          },
          {
            label: 'Lister',
            icon: 'pi pi-fw pi-align-right',
            routerLink: '/cars/'
          }
        ]
      }
    ];
  }
}
