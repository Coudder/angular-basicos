import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {





  constructor(private dbzservice:DbzService) { } //se inyecta el servicio que contiene el metodo agregar

  ngOnInit(): void {
  }


 

  @Input() nuevo:Personaje = { //personaje que crearemos paddre a hijo es input
    nombre: '',
    poder: 0
  }

  //hijo para padre es @poutput y eso que sigue
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter


  agregar(){

    if(this.nuevo.nombre.trim().length === 0){ //trim es para quitar espacios en blanco y length numero de letras
      return; //validacion si nombre esta en blanco no hace nada
    }

    this.dbzservice.agregarPersonaje(this.nuevo); //aqui usamos el metodo de agregar que esta en el servicio y le pasamos el personaje nuevo 
    //que esta en this.nuevo

    //this.onNuevoPersonaje.emit(this.nuevo); //hijo para padre es @output

      this.nuevo = { //volvemos a reiniciar el nuevo personaje en blanco
        nombre: '',
        poder: 0 
      }
  }

}
