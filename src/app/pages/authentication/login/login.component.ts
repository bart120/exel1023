import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  @ViewChild("password")
  passwd?: ElementRef;

  constructor(private authServ: AuthenticationService) { }

  onLogin(event: any, login: string): void {
    console.log(this.passwd?.nativeElement.value);
    //appel serveur
    this.authServ.login(login, this.passwd?.nativeElement.value);

  }
}
