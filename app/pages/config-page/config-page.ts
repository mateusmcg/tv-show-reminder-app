import {Component} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {AngularFire} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/config-page/config-page.html'
})
export class ConfigPage {

  constructor(private _navController: NavController,
              private menu: MenuController,
              private angularFire: AngularFire) {
  }
}
