import {Component} from '@angular/core';
import {Modal, NavController, Alert} from 'ionic-angular';
import {RegisterModal} from '../register-modal/register-modal';

import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/login-page/login-page.html'
})
export class LoginPage {
    constructor(private _navController: NavController,
                private angularFire: AngularFire) {
  }
  
  openRegister(){
      let modal = Modal.create(RegisterModal);
      this._navController.present(modal);
  }
  
  login(email, password){
      let authConfig = {
          method: AuthMethods.Password,
          provider: AuthProviders.Password,
          remember: 'default',
          scope: ['email']
      };
      
      let user = {
          email: email,
          password: password
      }
      
      var $this = this;
      this.angularFire.auth.login(user, authConfig).then(function(teste){
          console.debug('', teste);
          let alert = Alert.create({
            title: 'Sucesso',
            subTitle: 'Logado com sucesso !',
            buttons: ['OK']
          });
        
          $this._navController.present(alert);
      }, function(error){
          console.error('Email ou senha inválidos', error);
          let alert = Alert.create({
            title: 'Erro !',
            subTitle: 'Email ou senha inválidos.',
            buttons: ['OK']
          });
        
          $this._navController.present(alert);
      });
  }

}