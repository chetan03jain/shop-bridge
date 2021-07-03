import { Component, OnInit } from '@angular/core';
import { Subscription , interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
clicksCounter:number=Math.floor(Math.random() * 10000);
productsSold:number=Math.floor(Math.random() * 50000);
productsLeft:number=Math.floor(Math.random() * 50000);
revenue:number=Math.floor(Math.random() * 30000);
reviews:Array<any>=[
  {product:'XYZ Phone | 8GB RAM',name:'Chetan Jain', date:'20-06-2021', location:'Ludhiana, Punjab', rating:4,feedback:'I had a good experience with the phone purchased. Battery life , Camera are too good.'},
  {product:'ABC Phone | 16GB RAM',name:'Laxman Yadav', date:'23-05-2021', location:'Aligarh, Uttar Pradesh', rating:2,feedback:'Bad phone. Dont purchase. Heating problem , lag issue'},
  {product:'LMA Phone | 4GB RAM',name:'Anushka Singhal', date:'01-02-2021', location:'Waynad, Kerela', rating:3,feedback:'Ok phone ,not good not bad.'}
]
subscription:Subscription;
  constructor() {
    this.subscription=interval(5000).subscribe(()=>this.updateClicksCount());
  }

  ngOnInit(): void {
  }
updateClicksCount(){
  this.clicksCounter+=Math.floor(Math.random() * 100);
  let productCount=Math.floor(Math.random() * 50);
  this.productsSold+=productCount;
  this.productsLeft-=productCount;
  this.revenue+=Math.floor(Math.random() * 30000);
  //this.subscription.unsubscribe();
}
stars(star:number):Array<number>{
  return Array(star);
}
}
