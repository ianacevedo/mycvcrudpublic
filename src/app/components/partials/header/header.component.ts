import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged:Boolean = false;

  constructor(private userService:UserService) {}

  logout() {
    this.userService.logout();
  }

  get isAuth(){
      return this.userService.checkIfLogged();
  }
}
