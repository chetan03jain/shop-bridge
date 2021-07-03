import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-seller',
  templateUrl: './product-seller.component.html',
  styleUrls: ['./product-seller.component.css']
})
export class ProductSellerComponent implements OnInit {
selectedTab='Dashboard';
  constructor() { }

  ngOnInit(): void {
  }
changeTab(tab:string){
  this.selectedTab=tab;
}
}
