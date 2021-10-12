import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component'; //importamos el componente que se usa aqui

@NgModule({
    declarations: [
        ContadorComponent //declaramos el componente
    ],
    exports: [
        ContadorComponent //y exporetamos el componente para que se use fuera de aqui
    ],
    imports:[

    ]
})


export class ContadoModule {}