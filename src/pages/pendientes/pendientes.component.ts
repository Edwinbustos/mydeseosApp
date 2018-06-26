import { Component, OnInit } from '@angular/core';
import { PendientesService } from '../../app/services/pendientes.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class pendientesComponent implements OnInit {
  constructor(private pendiente:PendientesService, private navCtrl:NavController) {  }

  ngOnInit() {}

  irAgregar(){
    //alert("Ok");
    this.navCtrl.push(AgregarComponent);
  }
}
