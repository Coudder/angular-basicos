import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        //componentes pipes tc
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //los componentes que usaremos fuera de este modulo
        ListadoComponent
    ],
    imports: [
        //modulos unicamente
        CommonModule //para usar directivar personalizadas de angular
     ]

})
export class HeroesModule {}