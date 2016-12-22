import { Component } from '@angular/core';
import { NavController, ViewController, ToastController } from 'ionic-angular';

import { Database } from '../../providers/database';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var firebase;
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private toastCtrl: ToastController, private db: Database) { }

  ionViewDidLoad() {
    console.log('Hello SignupPage Page');
  }

  signUp(name, email, password, confirmPassword) {
    console.debug(firebase);

    if (password != confirmPassword) {
      let toast = this.toastCtrl.create({
        message: "Your passwords don't match",
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(newUser => {
      this.db.saveUserInfo({ name: name }, newUser.uid);
      newUser.sendEmailVerification();
      this.viewCtrl.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Please verify your e-mail before signing in',
        duration: 4000,
        position: 'bottom'
      });
      toast.present();
    }, error => {
      let toast = this.toastCtrl.create({
        message: error.message,
        duration: 4000,
        position: 'bottom'
      });
      toast.present();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
