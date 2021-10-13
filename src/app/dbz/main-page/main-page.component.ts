import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(  ) {

  }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 25000
  }

 

 
  

  /*Notas.- para hacer la comunicacion de padre a hijo se utiliza input y  para hacer la
  comunicacion de hijo a padre se emite con output*/
 



  

}
