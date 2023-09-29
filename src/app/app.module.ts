import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SortDirective } from './directive/sort.directive';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
