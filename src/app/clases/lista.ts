import {items_lista} from './items';

export class Lista{
    nombre_lista:string;
    terminado:boolean;
    item_list: items_lista[];

    constructor(name_lista:string){
            this.nombre_lista = name_lista;
            this.terminado = false;
    }
}
