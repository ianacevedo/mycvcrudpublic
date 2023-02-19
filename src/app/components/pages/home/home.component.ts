import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MyInfo } from 'src/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  myInfo:any = MyInfo;
  isLogged:Boolean = false;

  constructor(public userService:UserService, private router:Router) {}

  ngOnInit(): void {
    //this.router.events.subscribe(event => {
      //if (event instanceof NavigationStart) {
        this.isLogged = this.userService.checkIfLogged();
        //console.log(this.isLogged);
        if (!this.isLogged) {
          this.router.navigateByUrl('/login');
        }
      //}
    //});
  }
}
