import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { InterfaceUserLogin } from '../shared/interfaces/InterfaceUserLogin';
import { User } from '../shared/models/User';
import { users } from 'src/data';

const USER_KEY = 'User'; //can be replaced with other key
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  //public userObservable:Observable<User>;
  constructor() {
    //this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin:InterfaceUserLogin): User {
    let userRow = users.find((user) => userLogin.email === user.email && userLogin.password === user.password);
    if (userRow) return JSON.parse(userRow) as User;
    return new User();
  }

  logout() {
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  checkIfLogged() {
    let isLogged = localStorage.getItem(USER_KEY);
    if (isLogged) return true;
    return false;
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User {
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;

    return new User();
  }
}
