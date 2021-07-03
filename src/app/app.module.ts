import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './config.route';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './product-seller/dashboard/dashboard.component';
import { InventoryComponent } from './product-seller/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSellerComponent,
    HomeComponent,
    DashboardComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    SharedModule,
    PopoverModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
