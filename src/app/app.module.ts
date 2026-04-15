import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { RamkaDirective } from './ramka.directive';
import { KomponentStndAlComponent } from "./komponent-stnd-al/komponent-stnd-al.component";

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    RamkaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KomponentStndAlComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
