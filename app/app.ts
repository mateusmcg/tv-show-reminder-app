import {Component} from '@angular/core';
import {Platform, ionicBootstrap, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login-page/login-page';
import {HomePage} from './pages/home-page/home-page';
import {HTTP_PROVIDERS} from '@angular/http';
import {TvShowProvider} from './provider/tvshow-provider';
import {AuthProvider} from './provider/auth-provider';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
    FIREBASE_PROVIDERS,
    HTTP_PROVIDERS,
    TvShowProvider,
    AuthProvider,
    defaultFirebase({
        apiKey: "AIzaSyBOsSdHwjQlylN-S0nuvcsdxQ2ZPIzzZqY",
        authDomain: "tv-show-reminder-bc893.firebaseapp.com",
        databaseURL: "https://tv-show-reminder-bc893.firebaseio.com",
        storageBucket: "tv-show-reminder-bc893.appspot.com",
    })
  ],
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform,
              private angularFire: AngularFire,
              private authProvider: AuthProvider) {
    
    this.angularFire.auth.subscribe(
      result => {
        if(result){
          let authData = {
              uid: result.uid,
              provider: result.provider,
              email: result.auth.email,
              displayName: result.auth.displayName
          }

          this.authProvider.setAuth(authData);
          this.rootPage = HomePage;
        } else{
          this.rootPage = LoginPage;
        }
      },
      error => {
        console.error('Erro ao logar', error);
      },
      ()=> {
        console.log('Logado com sucesso');
      }
    )

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp)
