import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyBOsSdHwjQlylN-S0nuvcsdxQ2ZPIzzZqY",
  authDomain: "tv-show-reminder-bc893.firebaseapp.com",
  databaseURL: "https://tv-show-reminder-bc893.firebaseio.com",
  storageBucket: "tv-show-reminder-bc893.appspot.com",
  messagingSenderId: "808394238523"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
