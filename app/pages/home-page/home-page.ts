import {Component} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {MyShowsPage} from '../myshows-page/myshows-page';
import {SearchPage} from '../search-page/search-page';
import {LoginPage} from '../login-page/login-page';
import {ConfigPage} from '../config-page/config-page';
import {AngularFire} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {

  private rootPage = MyShowsPage;
  private myShowsPage = MyShowsPage;
  private searchPage = SearchPage;
  private configPage = ConfigPage;
  private authData: any;

  constructor(private _navController: NavController,
              private menu: MenuController,
              private angularFire: AngularFire) {
        
        this.authData = this.angularFire.auth.getAuth().auth;
  }

  openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page;

    // close the menu when clicking a link from the menu
    this.menu.close();
  }

  signOut(){
    this.angularFire.auth.logout();
    this._navController.popToRoot();
  }
}
