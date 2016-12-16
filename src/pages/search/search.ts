import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MazeTvApi } from '../../providers/maze-tv-api';

import { SeasonListPage } from '../season-list/season-list';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  shows: any;

  constructor(public navCtrl: NavController, public _mazeTvApi: MazeTvApi) {
    this.shows = [];
  }

  ionViewDidLoad() {
    console.log('Hello SearchPage Page');
  }

  searchShows(ev) {
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this._mazeTvApi.search(val).subscribe(ob => {
        this.shows = ob.json();
      }, error => {
        console.debug(error);
      });
      // this.items = this.items.filter((item) => {
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
    }
  }

  getSeasons(selectedShow) {
    this.navCtrl.push(SeasonListPage, selectedShow);
  }

}
