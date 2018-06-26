import { Injectable } from '@angular/core';
import {Lista} from  '../clases/lista';

@Injectable()
export class PendientesService {

  // Propiedades
  mi_lista:Lista[]=[];

  constructor() {

      let lista1 = new Lista("Revision de Pendientes Trabajo");
      let lista2 = new Lista("Reunion con Compañeros");
      let lista3 = new Lista("Realizar Ajustes");

      this.mi_lista.push(lista1);
      this.mi_lista.push(lista2);
      this.mi_lista.push(lista3);
      console.log("Ejecutado el Servicio!!");
   }
}
