import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DataTableComponent } from './data-table/data-table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';




@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



