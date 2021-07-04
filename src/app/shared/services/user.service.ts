import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
usersList:Array<UserDetails>=new Array();
isUserSeller:boolean=false;
isUserLoggedIn:boolean=false;
isUserRegistered:boolean=false;
loggedInUserName:string;
  constructor() { }

  addUsersToList(user:UserDetails){
    this.usersList.push(user);
    this.loggedInUserName=this.getLastAddedUser();
  }
  getLastAddedUser(){
    return this.usersList[this.usersList.length-1].firstName;
  }
  getAllUsers(){
    return this.usersList;
  }
  getSellerInfo(){
    return this.usersList[this.usersList.length-1];
  }
}
