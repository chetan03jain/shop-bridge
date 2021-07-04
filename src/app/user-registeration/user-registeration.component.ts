import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyDetails } from '../shared/models/company-details-model';
import { UserDetails } from '../shared/models/user-details-model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent implements OnInit {
imageUrl:any;
isSeller:boolean=false;
firstNameIsEmpty:boolean=false;
emailIsEmpty:boolean=false;
passwordIsEmpty:boolean=false;
confirmPasswordIsEmpty:boolean=false;
addressIsEmpty:boolean=false;
phoneNumberIsEmpty:boolean=false;
companyNameIsEmpty:boolean=false;
typeIsEmpty:boolean=false;
companyAddressIsEmpty:boolean=false;
isPassowordMatch:boolean=false;
  constructor(private userService:UserService , private router:Router) { }

  ngOnInit(): void {
  }
  onSelectFile(event){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageUrl = event.target.result;
      }
    }
  }
  sellerValueChanged(event){
    this.isSeller=event.target.checked;
  }
  onRegister(form:NgForm){
    let user=new UserDetails();
    let company=new CompanyDetails();
    user.firstName=form.value.fname;
    user.lastName=form.value.lname;
    user.emailId=form.value.email;
    user.phoneNumber=form.value.phone;
    user.password=form.value.password;
    user.confirmPassword=form.value.confirmpassword;
    user.address=form.value.address;
    user.dob=form.value.birthday;
    user.isSeller=this.isSeller;
    this.firstNameIsEmpty=!user.firstName?true:false;
    this.emailIsEmpty=!user.emailId?true:false;
    this.phoneNumberIsEmpty=!user.phoneNumber?true:false;
    this.addressIsEmpty=!user.address?true:false;
    this.passwordIsEmpty=!user.password?true:false;
    this.confirmPasswordIsEmpty=!user.confirmPassword?true:false;
    this.isPassowordMatch=user.password==user.confirmPassword?false:true;
    if(user.isSeller){
      company.copmanyName=form.value.companyname;
      company.productsSelling=form.value.type;
      company.companyAddress=form.value.companyaddress;
      company.companyPhoneNumber=form.value.companyphone;
      company.companyEmail=form.value.companyemail;
      company.companyFounded=form.value.companyfounded;
      company.companyLogo=this.imageUrl;
      this.companyAddressIsEmpty=!company.companyAddress?true:false;
      this.companyNameIsEmpty=!company.copmanyName?true:false;
      this.typeIsEmpty=!company.productsSelling?true:false;
      user.companyDetails=company;
    }
    if(!this.firstNameIsEmpty && !this.emailIsEmpty && !this.phoneNumberIsEmpty
      && !this.addressIsEmpty && !this.passwordIsEmpty && !this.confirmPasswordIsEmpty && !this.companyAddressIsEmpty
      && !this.companyNameIsEmpty && !this.typeIsEmpty && !this.isPassowordMatch){
      if(user.isSeller){
        this.userService.isUserSeller=true;
      }
      this.userService.addUsersToList(user);
      this.userService.isUserRegistered=true;
      this.router.navigate(['']);
    }
  }
  valueChange(event,number){
    if(event!=''){
      switch(number){
        case 1: this.firstNameIsEmpty=false;
        break;
        case 2: this.emailIsEmpty=false;
        break;
        case 3: this.phoneNumberIsEmpty=false;
        break;
        case 4: this.addressIsEmpty=false;
        break;
        case 5: this.passwordIsEmpty=false;
        break;
        case 6: this.confirmPasswordIsEmpty=false;
        break;
        case 7: this.companyNameIsEmpty=false;
        break;
        case 8: this.typeIsEmpty=false;
        break;
        case 9: this.companyAddressIsEmpty=false;
        break;
      }

    }
  }
}
