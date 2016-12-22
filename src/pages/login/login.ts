import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';

import { Database } from '../../providers/database';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var firebase;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private toastCtrl: ToastController, private db: Database) { }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  signUp() {
    let signUpModal = this.modalCtrl.create(SignupPage);
    signUpModal.present();
  }

  signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(userData => {
      console.debug(userData);
      this.db.getUserData(userData.uid).then(userInfo =>{
      console.debug(userInfo);
      })
    }, error => {
      let errorToast = this.toastCtrl.create({
        message: error.message,
        duration: 4000,
        position: 'bottom'
      })
    });
  }

}
