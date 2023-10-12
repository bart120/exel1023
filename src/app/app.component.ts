import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exel1024';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',

      },
      {
        label: 'Voitures',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Ajouter',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Lister',
            icon: 'pi pi-fw pi-align-right'
          }
        ]
      },
      {
        label: 'Connexion',
        icon: 'pi pi-fw pi-file',

      },
    ];
  }
}
