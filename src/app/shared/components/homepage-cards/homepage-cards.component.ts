import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'homepage-cards',
  templateUrl: './homepage-cards.component.html',
  styleUrls: ['./homepage-cards.component.css']
})
export class HomepageCardsComponent implements OnInit {
@Input() item:any;

  constructor() { }

  ngOnInit(): void {
  }

  stars(star:number):Array<number>{
    return Array(star);
  }
}
