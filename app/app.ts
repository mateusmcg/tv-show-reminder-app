import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login-page/login-page';

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

  constructor(private platform:Platform) {
    this.rootPage = LoginPage;
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp)
