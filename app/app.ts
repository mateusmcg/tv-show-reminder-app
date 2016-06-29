import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login-page/login-page';
import {HomePage} from './pages/home-page/home-page';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
    FIREBASE_PROVIDERS,
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
              private angularFire: AngularFire) {
    
    let authData = this.angularFire.auth.getAuth();

    if(authData){
      this.rootPage = HomePage;
    } else{
      this.rootPage = LoginPage;
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp)
