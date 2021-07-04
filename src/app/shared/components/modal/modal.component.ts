import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  BsModalRef } from 'ngx-bootstrap/modal';
import { Item } from '../../models/item-model';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
title:string;
editQuantity:number;
editPrice:number;
editDescription:string='';
imageUrl:any;
editName:string='';
selectedCategory:string;
categoryTypes:Array<any>=["Mobile","Fashion","Electronics","Home","Appliance","Kitchen","Beauty & Personal Care","Books"];
nameIsEmpty:boolean=false;
quantityIsEmpty:boolean=false;
priceIsEmpty:boolean=false;
isAddItem:boolean;
editIndex:number;
editImage:any;
constructor(public bsModalRef:BsModalRef, private inventoryService:InventoryService ) { }

  ngOnInit(): void {
  }
  selectCategory(categoy:string){
    this.selectedCategory=categoy;
  }
  onSubmit(form:NgForm){
    let item=new Item();
    item.name=form.value.name;
    item.quantity=form.value.quantity;
    item.price=form.value.price;
    item.description=form.value.description;
    item.categoryType=this.selectedCategory;
    item.image=this.imageUrl;
    this.nameIsEmpty=item.name==''?true:false;
    this.quantityIsEmpty=(!item.quantity || item.quantity==undefined)?true:false;
    this.priceIsEmpty=(!item.price||item.price==undefined)?true:false;
    if(!this.nameIsEmpty && !this.quantityIsEmpty && !this.priceIsEmpty){
      if(this.isAddItem){
        this.inventoryService.showSuccessAlert=true;
        this.inventoryService.addItemsToInventory(item);
        this.closeModal();
      }
      else{
        item.image=item.image ? item.image : this.editImage;
        this.inventoryService.showEditSuccessAlert=true;
        this.inventoryService.updateItemsInInventory(this.editIndex,item);
        this.closeModal();
      }
    }
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
  closeModal(){
    this.bsModalRef.hide();
  }
  nameValueChange(event){
    if(event!=''){
      this.nameIsEmpty=false;
    }
  }
  quantityValueChange(event){
    if(event!=''){
      this.quantityIsEmpty=false;
    }
  }
  priceValueChange(event){
    if(event!=''){
      this.priceIsEmpty=false;
    }
  }
}
