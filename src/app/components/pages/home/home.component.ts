import { Component } from '@angular/core';
import { MyInfo } from 'src/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myInfo:any = MyInfo;

}
