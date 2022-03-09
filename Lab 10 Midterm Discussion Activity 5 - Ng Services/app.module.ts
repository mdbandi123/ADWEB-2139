import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyserviceService } from './myservice.service'; //imported service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ContactComponent,
    NoPageFoundComponent,
    NewCmpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
