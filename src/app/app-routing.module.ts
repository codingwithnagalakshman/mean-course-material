import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShoppingItemsComponent } from './shop/shopping-items/shopping-items.component';
import { ContactUsComponent } from './account/contact-us/contact-us.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { ProfileComponent } from './account/profile/profile.component';
import { OrdersComponent } from './account/orders/orders.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { ContactFormListComponent } from './account/contact-form-list/contact-form-list.component';
import { SignupSuccessComponent } from './account/signup-success/signup-success.component';
import { ShippingAddressComponent } from './shop/shipping-address/shipping-address.component';


const routes: Routes = [
  { path: '' , component: WelcomeComponent },
  { path: 'shop', component: ShoppingItemsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up-success', component: SignupSuccessComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartItemsComponent },
  { path: 'contact-us-list', component: ContactFormListComponent },
  { path: 'shipping-address', component: ShippingAddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
