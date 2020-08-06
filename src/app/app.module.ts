import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';

import { ShoppingItemComponent } from './shop/shopping-item/shopping-item.component';
import { ShoppingItemsComponent } from './shop/shopping-items/shopping-items.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { ContactUsComponent } from './account/contact-us/contact-us.component';
import { ProfileComponent } from './account/profile/profile.component';
import { OrdersComponent } from './account/orders/orders.component';
import { CartComponent } from './cart/cart/cart.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactFormListComponent } from './account/contact-form-list/contact-form-list.component';
import { SignupSuccessComponent } from './account/signup-success/signup-success.component';
import { ShippingAddressComponent } from './shop/shipping-address/shipping-address.component';
import { PaymentComponent } from './shop/payment/payment.component';
import { AuthGuard } from './account/auth.guard';
import { AuthInterceptor } from './account/auth.interceptor';
import { UnauthComponent } from './account/unauth/unauth.component';

import { PaymentSuccessComponent } from './shop/payment-success/payment-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingItemComponent,
    ShoppingItemsComponent,
    SignInComponent,
    SignUpComponent,
    ContactUsComponent,
    ProfileComponent,
    OrdersComponent,
    CartComponent,
    CartItemsComponent,
    WelcomeComponent,
    ContactFormListComponent,
    SignupSuccessComponent,
    ShippingAddressComponent,
    PaymentComponent,
    UnauthComponent,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatSortModule,
    MatDatepickerModule,
    MomentDateModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [AuthGuard,  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
