import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user?: UserModel;
    private subjectUser = new BehaviorSubject<UserModel>({ isLogged: false });

    get user$(): Observable<UserModel> {
        return this.subjectUser.asObservable();
    }

    get getUser(): UserModel {
        return this.user as UserModel;
    }

    constructor() {
        if (sessionStorage.getItem('USER') != null) {
            this.user = JSON.parse(sessionStorage.getItem('USER') || '');
            this.subjectUser.next(this.user as UserModel);
        }
    }

    login(login: string, password: string) {
        //appel serveur
        this.user = { login: login, firstname: 'BOB', isLogged: true };
        this.subjectUser.next(this.user);
        sessionStorage.setItem('USER', JSON.stringify(this.user));
    }

    logout() {
        this.user = { isLogged: false };
        this.subjectUser.next(this.user);
        sessionStorage.removeItem('USER');
    }

}