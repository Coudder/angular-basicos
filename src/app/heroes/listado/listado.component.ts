import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  
  heroes:string[] = ['Spiderman','Ironman','Thor','Hulk','Capitan America'];
  heroeBorrado:string = '';

  

  borrarHeroe(){
    //console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
    // const heroeBorrado = this.heroes.shift() || ''; //borra los elementos del arreglo
    // this.heroeBorrado = heroeBorrado;
    
  }

  
}
