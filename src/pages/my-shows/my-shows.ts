import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MyShows page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-shows',
  templateUrl: 'my-shows.html'
})
export class MyShowsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MyShowsPage Page');
  }

}
