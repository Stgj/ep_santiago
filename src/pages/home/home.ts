import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista:Array<any> = [
    {titulo: "primer elemento", id:1, descripcion:"Este es el primer elemento"},
    {titulo: "segundo elemento", id:2, descripcion:"Este es el segundo elemento"},
    {titulo: "tercer elemento", id:3, descripcion:"Este es el tercer elemento"},
    {titulo: "cuarto elemento", id:4, descripcion:"Este es el cuarto elemento"},
    {titulo: "quinto elemento", id:5, descripcion:"Este es el quinto elemento"}
  ];
  constructor(public navCtrl: NavController) {}
  agregarPagina(){
    this.navCtrl.push(AboutPage);
  }
  agregarPagina2(){
    this.navCtrl.push(AboutPage);
  }

}
