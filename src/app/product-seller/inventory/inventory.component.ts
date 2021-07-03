import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  bsModalRef:BsModalRef;

  constructor(private modalService:BsModalService) { }

  ngOnInit(): void {
  }

  addItems(){
    const initialState={
      title:'Add Item'
    };
    this.bsModalRef = this.modalService.show(ModalComponent , {initialState});
  }
}
