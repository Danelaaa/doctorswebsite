import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit{
  isChecked = false;
  auth(){
    this.isChecked = !this.isChecked;
  }


  hidee:boolean = true;
  hide(hidee:boolean){
    hidee = false;
  }


  constructor(){}
  ngOnInit(): void {
    
  }
}
