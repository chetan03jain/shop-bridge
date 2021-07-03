import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageCardsComponent } from './components/homepage-cards/homepage-cards.component';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';




@NgModule({
  declarations: [HomepageCardsComponent, ModalComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    BrowserAnimationsModule
  ],
  exports:[HomepageCardsComponent]
})
export class SharedModule { }
