import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthProvider} from '../../provider/auth-provider';

@Component({
  templateUrl: 'build/pages/myshows-page/myshows-page.html'
})
export class MyShowsPage {

  private myShows: any[];

  constructor(private navController: NavController,
              private authProvider: AuthProvider) {
      this.myShows = authProvider.getAuth().shows;
  }
}
