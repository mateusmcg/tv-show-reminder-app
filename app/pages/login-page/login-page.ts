import {Component} from '@angular/core';
import {Modal, NavController, Alert, Loading} from 'ionic-angular';
import {RegisterModal} from '../register-modal/register-modal';
import {HomePage} from '../home-page/home-page';

import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/login-page/login-page.html'
})
export class LoginPage {
  
  private progress: boolean = false;
    
  constructor(private _navController: NavController,
              private angularFire: AngularFire) {
  }
  
  openRegister(){
      let modal = Modal.create(RegisterModal);
      this._navController.present(modal);
  }

  loginGoogle(email, password){
      let loading = Loading.create({
        content: "Entrando...",
        dismissOnPageChange: true
      });  
      this._navController.present(loading);

       let authConfig = {
          method: AuthMethods.Popup,
          provider: AuthProviders.Google,
          remember: 'default',
          scope: ['email']
      };
      
      let user = {
          email: email,
          password: password
      }
      
      var $this = this;
      this.angularFire.auth.login(user, authConfig).then(function(teste){
          $this._navController.push(HomePage);
      }, function(error){
          loading.dismiss();
          console.error('Email ou senha inválidos', error);
          
          let alert = Alert.create({
            title: 'Oops :(',
            subTitle: 'Email ou senha inválidos.',
            buttons: ['OK']
          });
        
          $this._navController.present(alert);
      });
  }

  loginFacebook(email, password){
      let loading = Loading.create({
        content: "Entrando...",
        dismissOnPageChange: true
      });  
      this._navController.present(loading);

       let authConfig = {
          method: AuthMethods.Popup,
          provider: AuthProviders.Facebook,
          remember: 'default',
          scope: ['email']
      };
      
      let user = {
          email: email,
          password: password
      }
      
      var $this = this;
      this.angularFire.auth.login(user, authConfig).then(function(teste){
          $this._navController.push(HomePage);
      }, function(error){
          loading.dismiss();
          console.error('Email ou senha inválidos', error);
          
          let alert = Alert.create({
            title: 'Oops :(',
            subTitle: 'Email ou senha inválidos.',
            buttons: ['OK']
          });
        
          $this._navController.present(alert);
      });
  }
  
  login(email, password){
      let loading = Loading.create({
        content: "Entrando...",
        dismissOnPageChange: true
      });  
      this._navController.present(loading);
      
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
          $this._navController.push(HomePage);
      }, function(error){
          loading.dismiss();
          console.error('Email ou senha inválidos', error);
          
          let alert = Alert.create({
            title: 'Oops :(',
            subTitle: 'Email ou senha inválidos.',
            buttons: ['OK']
          });
        
          $this._navController.present(alert);
      });
  }

}