import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoModule } from './contador/contador.module';

//crear modulo contadorMoudule


import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
  //  ContadorComponent, //se declaraon los modulos a usar
    
  ],
  imports: [
    BrowserModule,
    HeroesModule, //importamos el mpodulo que contiene nuestros dos compoenntes de heroes para que se pueda usar
    ContadoModule //importamos el modulo creado en en el componente contador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
