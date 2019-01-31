import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateItineraryComponent } from './create-itinerary/create-itinerary.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateItineraryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
