import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { GuardarComponent } from './guardar/guardar.component';
import { BuscartodosComponent } from './buscartodos/buscartodos.component';

@NgModule({
  declarations: [
    AppComponent,
    GuardarComponent,
    BuscartodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
