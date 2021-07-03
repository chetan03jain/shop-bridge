import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides:Array<any>=new Array();
  items:Array<any>=new Array();

  constructor() { }

  ngOnInit(): void {
    this.slides=[
      {image:"../assets/images/Small_Preview_Free_Fashion_Sale_Template_Banners.jpg"},
      {image:"../assets/images/Small_Preview_Free_Fashion_Sale_Template_Banners.jpg"},
    ];
    this.items=[
      {
        name:'XYZ Mobile - Coral Blue | 8 GB Ram',
        price:'₹25,000',
        image:'../assets/images/phone.jpg',
        rating:4,
        details:['6000mAh battery','6.5" screen','Water resistant']
    },
    {
      name:'Headphones - Bass boosted | Bluetooth',
      price:'₹5,990',
      image:'../assets/images/headphone.jpg',
      rating:3,
      details:['3 days battery life','Ear cushions','Water resistant']
  },
  {
    name:'ABC Mobile -Black  | 8 GB Ram | 32GB storage',
    price:'₹11,100',
    image:'../assets/images/phone2.jpg',
    rating:5,
    details:['4500mAh battery','6.2" screen','Gorilla Glass 4']
},
{
  name:'Earbuds wireless headphone | Fully Wireless',
  price:'₹2,999',
  image:'../assets/images/wireless-earphone.jpg',
  rating:2,
  details:['Wireless earphone','2 days battery life','Waterproof']
}
    ]
  }

}
