import { Injectable } from '@angular/core';
import { Item } from '../models/item-model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 private itemsInInventory:Array<Item>=[
{name:'XYZ Phone',description:'6 GB RAM',price:20000,quantity:100,image:'../../assets/images/phone.jpg',categoryType:'Mobile'},
{name:'ABC Phone',description:'4 GB RAM',price:15990,quantity:0,image:'../../assets/images/phone2.jpg',categoryType:'Mobile'}
];
 showSuccessAlert:boolean=false;
 showEditSuccessAlert:boolean=false;

  constructor() { }

  addItemsToInventory(item:Item){
  this.itemsInInventory.push(item);
  }
  getItemsInInventory(){
    return this.itemsInInventory;
  }
  deleteItemsInInventory(index:number){
    this.itemsInInventory.splice(index,1);
  }
  updateItemsInInventory(index,item:Item){
    this.itemsInInventory[index]=item;
  }
}
