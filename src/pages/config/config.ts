import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Settings } from '../../providers/settings';

/*
  Generated class for the Config page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {

  private availableThemes = [];
  private selectedTheme = '';

  constructor(public navCtrl: NavController, private settings: Settings) {
    this.availableThemes = [
      {
        name: 'Blue',
        value: 'blue-theme',
        selected: true
      },
      {
        name: 'Red',
        value: 'red-theme'
      },
      {
        name: 'Default',
        value: 'default-theme'
      }
    ]

    this.selectedTheme = 'default-theme';
  }

  ionViewDidLoad() {
    console.log('Hello ConfigPage Page');
  }

  applyTheme(selectedTheme) {
    this.settings.applyTheme(selectedTheme);
  }


}
