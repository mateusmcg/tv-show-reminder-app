import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Config page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ConfigPage Page');
  }

}
