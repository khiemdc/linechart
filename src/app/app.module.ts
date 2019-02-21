import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LinechartModule } from 'linechart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LinechartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
