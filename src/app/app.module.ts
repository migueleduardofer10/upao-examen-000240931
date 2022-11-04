import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './homee/home/home.component';
import { NewEspacioComponent } from './new-espacio/new-espacio/new-espacio.component';
import { ListEspaciosComponent } from './list-espacios/list-espacios/list-espacios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewEspacioComponent,
    ListEspaciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
