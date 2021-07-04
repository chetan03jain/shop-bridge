import { LocationStrategy } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='shop-bridgr'
  normalUser:boolean=true;
  emailIsEmpty:boolean=false;
  passwordIsEmpty:boolean=false;
  passwordIsValid:boolean=true;
  emailIsValid:boolean=true;
  constructor(private route:Router,private url : LocationStrategy,public userService:UserService){}
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
  signOut(){
    this.userService.isUserLoggedIn=false;
    this.userService.isUserRegistered=false;
    this.userService.isUserSeller=false;
    if(this.url.path()==='/seller'){
      this.route.navigate(['']);
      this.normalUser=true;
    }
  }
  logIn(form:NgForm){
    this.emailIsEmpty=form.value.email?false:true;
    this.passwordIsEmpty=form.value.password?false:true;
    let allUsers=this.userService.getAllUsers();
    let userEmail=form.value.email && allUsers.find(item=>item.emailId==form.value.email);
    this.emailIsValid=userEmail?true:false;
    this.passwordIsValid=userEmail && userEmail.password==form.value.password ? true:false;
    if(!this.emailIsEmpty && this.emailIsValid && !this.passwordIsEmpty &&this.passwordIsValid){
      this.userService.isUserLoggedIn=true;
      if(userEmail.isSeller){
        this.userService.isUserSeller=true;
      }
    }
  }
  emailValueChange(event){
    if(event!=''){
      this.emailIsEmpty=false;
      this.emailIsValid=true;
    }
  }
  passwordValueChange(event){
    if(event!=''){
      this.passwordIsEmpty=false;
      this.passwordIsValid=true;
    }
  }
}
