import { Component } from '@angular/core';



@Component({
  selector: 'app-cookie',
  imports: [],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent {
  //gouts = [{name:'chocolat'},{name:'vanille'},{name:'banane'}]


  gouts = [
    {id:1,name:'chocolat',saveur:5},
    {id:2,name:'vanille',saveur:6},
    {id:3,name:'banane',saveur:3}]
}
