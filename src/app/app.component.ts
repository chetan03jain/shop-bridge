import { LocationStrategy } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  normalUser:boolean=true;
  constructor(private route:Router,private url : LocationStrategy){}
  ngOnInit(){
    if(this.url.path()==='/seller'){
      this.normalUser=false;
    }
    else{
      this.normalUser=true;
    }
  }
  changeUser(event){
    this.normalUser=!event.target.checked;
    if(!this.normalUser){
      this.route.navigate(['seller']);
    }
    else{
      this.route.navigate(['']);
    }
  }
  navigateToHome(){
    this.normalUser=true;
  }
}
