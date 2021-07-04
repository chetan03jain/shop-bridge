import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Item } from 'src/app/shared/models/item-model';
import { InventoryService } from 'src/app/shared/services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  bsModalRef:BsModalRef;
  itemsList:Array<any>=new Array();
  itemDeleted:boolean=false;
  tempItemsList:Array<any>=new Array();
  constructor(private modalService:BsModalService,public inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.showSuccessAlert=false;
    this.inventoryService.showEditSuccessAlert=false;
    this.itemsList=this.inventoryService.getItemsInInventory();
    this.tempItemsList=this.inventoryService.getItemsInInventory();
  }

  addItems(){
    this.inventoryService.showSuccessAlert=false;
    let initialState={
      title:'Add Item',
      isAddItem:true
    };
    this.bsModalRef = this.modalService.show(ModalComponent , {initialState});
  }
  deleteItem(index){
    this.itemDeleted=true;
    this.inventoryService.deleteItemsInInventory(index);
    setTimeout(()=>this.itemDeleted=false,5000);
  }
  editItem(item:Item , index){
    this.inventoryService.showEditSuccessAlert=false;
    let initialState={
      title:'Edit Item',
      editName:item.name,
      editDescription:item.description,
      editQuantity:item.quantity,
      editPrice:item.price,
      selectedCategory:item.categoryType,
      isAddItem:false,
      editIndex:index,
      editImage:item.image
    };
    this.bsModalRef = this.modalService.show(ModalComponent , {initialState});
  }
  searchInItemList(event){
    let value=event.target.value;
    console.log(value);
      this.itemsList=this.itemsList.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()));
    if(event.keyCode==8){
      this.itemsList=this.tempItemsList.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()));
    }
  }
}
