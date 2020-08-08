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
import { PaymentComponent } from './shop/payment/payment.component';
import { AuthGuard } from './account/auth.guard';
import { UnauthComponent } from './account/unauth/unauth.component';
import { PaymentSuccessComponent } from './shop/payment-success/payment-success.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { SelectComponent } from './components/select/select.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { TableComponent } from './components/table/table.component';
import { TabComponent } from './components/tab/tab.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';


const routes: Routes = [
  { path: '' , component: WelcomeComponent },
  { path: 'shop', component: ShoppingItemsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up-success', component: SignupSuccessComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartItemsComponent, canActivate: [AuthGuard] },
  { path: 'contact-us-list', component: ContactFormListComponent, canActivate: [AuthGuard] },
  { path: 'shipping-address', component: ShippingAddressComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'unauth' , component: UnauthComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'radio', component: RadioButtonComponent },
  { path: 'select', component: SelectComponent },
  { path: 'slidetoggle', component: SlideToggleComponent },
  { path: 'table', component: TableComponent },
  { path: 'tab', component: TabComponent },
  { path: 'tooltip', component: TooltipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
