import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {

  //@Input('data') personajes:Personaje[] = []; //imput es para poder comunucarse con  el padre eh hijo

  get personajes(){
    return this.dbzService.personajes;
  }
  
  constructor(private dbzService:DbzService) {



   }

  ngOnInit(): void {
  }

  

}
