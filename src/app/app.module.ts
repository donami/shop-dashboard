import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TitlePaneComponent } from './title-pane/title-pane.component';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MessageComponent } from './message/message.component';

import {
  ProductService,
  CategoryService,
  OrderService,
} from './services';
import { ProductAddComponent } from './product-add/product-add.component';
import { LatestOrdersComponent } from './latest-orders/latest-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopMenuComponent,
    TitlePaneComponent,
    ProductListContainerComponent,
    ProductDetailComponent,
    ProductFormComponent,
    MessageComponent,
    ProductAddComponent,
    LatestOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductService,
    CategoryService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
