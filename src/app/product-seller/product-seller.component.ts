import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-product-seller',
  templateUrl: './product-seller.component.html',
  styleUrls: ['./product-seller.component.css']
})
export class ProductSellerComponent implements OnInit {
selectedTab='Dashboard';
sellerInfo:any;
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
this.sellerInfo=this.userService.getSellerInfo();
  }
changeTab(tab:string){
  this.selectedTab=tab;
}
}
