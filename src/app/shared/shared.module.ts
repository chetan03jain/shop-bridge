import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageCardsComponent } from './components/homepage-cards/homepage-cards.component';



@NgModule({
  declarations: [HomepageCardsComponent],
  imports: [
    CommonModule
  ],
  exports:[HomepageCardsComponent]
})
export class SharedModule { }
