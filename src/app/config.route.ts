import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProductSellerComponent } from "./product-seller/product-seller.component";
import { UserService } from "./shared/services/user.service";
import { UserRegisterationComponent } from "./user-registeration/user-registeration.component";


 export const AppRoutes:Routes =[
  {path:'',component:HomeComponent},
  {path:'seller',component:ProductSellerComponent},
  {path:'signup',component:UserRegisterationComponent}
];



