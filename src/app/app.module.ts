import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetaleComponent } from './detale/detale.component';
import { FilmyService } from './filmy.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FilmyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
