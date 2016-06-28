import {Component} from '@angular/core';
import {Modal, NavController,ViewController, Alert} from 'ionic-angular';
import {AngularFire} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/register-modal/register-modal.html'
})
export class RegisterModal {
    
    constructor(private _navController: NavController,
                private _viewController: ViewController,
                private angularFire: AngularFire) {
                  
    }
  
    close(){
        this._viewController.dismiss();
    }
    
    register(email, password){
        var $this = this;
        this.angularFire.auth.createUser({
            email: email,
            password: password
        }).then(function(userData){
          $this._viewController.dismiss();
        }, function(error){
            console.error('Erro', error);
          let alert = Alert.create({
            title: 'Ops :(',
            subTitle: 'Não consegui te cadastrar, tente mais tarde !',
            buttons: ['OK']
          });
        
          $this._navController.present(alert);
        });
    }
}