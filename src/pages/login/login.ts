import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { AngularFire, AuthMethods } from 'angularfire2';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  showLogin: Boolean;
  showSignUp: Boolean;
  login: any;
  signup: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.showLogin = false;
    this.showSignUp = false;
    this.login = {};
    this.signup = {};

    this.af.auth.subscribe(user => {
      if (user) {
        this.navCtrl.setRoot(HomePage);
        console.debug('AF User', user);
      }
      else {
        // user not logged in
        console.error('Erro ao logar');
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openLoginForm() {
    this.showLogin = true;
    this.showSignUp = false;
  }

  openSignUpForm() {
    this.showSignUp = true;
    this.showLogin = false;
  }

  back() {
    this.showSignUp = false;
    this.showLogin = false;
  }

  auth() {
    this.af.auth.login({
      email: this.login.email,
      password: this.login.password
    }, {
      method: AuthMethods.Password
    }).then(
      (success) => {
        console.log(success);
        this.navCtrl.setRoot(HomePage);
      }).catch(
      (err) => {
        console.log(err);
      })
  }

  register() {
    this.af.auth.createUser({
      email: this.signup.email,
      password: this.signup.password
    }).then(
      (success) => {
        this.showLogin = true;
        this.showSignUp = false;
        this.login.email = this.signup.email;
      }).catch(
      (err) => {
        console.error(err);
      })
  }

}
