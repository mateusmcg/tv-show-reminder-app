import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
    
  }

  logout(){
    this.afAuth.logout().then(
      (success) =>{
        this.navCtrl.setRoot(LoginPage);
      }, (err) =>{
        console.error('Erro ao deslogar', err);
      });
  }

}
