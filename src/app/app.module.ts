import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-cart/cart-item/cart-item.component';
import { CheckoutFormComponent } from './components/shopping-cart/checkout-form/checkout-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    CheckoutFormComponent,
    OrderConfirmComponent,
    CartItemComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
