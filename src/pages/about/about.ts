import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  seleccion;string = "Grupo1"
  constructor (public navCtrl: NavController){}

  volver(){
    this.navCtrl.pop();
  }
}
