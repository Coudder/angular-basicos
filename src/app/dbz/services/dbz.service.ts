import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    //arreglo de personajes
  private _personajes:Personaje[] = [ //arreglo de personajes que moestraremos
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    }
  ];


  get personajes(): Personaje[] { //accedemos al arreglo de personajes con un getter
      return [...this._personajes];
  }
   
    constructor(){
     //   console.log('Servicio inicializado');
        
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje); //se pone a la privada porque es donde agregaremos los nuevos personajes _personajes
        

    }

}