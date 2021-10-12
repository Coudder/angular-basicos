import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad  : number = 34;

    get nombreCapitalizado():string{ //getters
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return `${this.nombre} - ${this.edad} `; //alt+96 
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 30;
    }
}