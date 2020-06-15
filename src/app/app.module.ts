import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CompanyItemComponent } from './companies/company-list/company-item/company-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-list/product-edit/product-edit.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { Custom1 } from './custom/custom1.directive';
import { Custom2Directive } from './custom/custom2.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompaniesComponent,
    CompanyListComponent,
    CompanyItemComponent,
    ProductListComponent,
    ProductEditComponent,
    CompanyDetailComponent,
    Custom1,
    Custom2Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
