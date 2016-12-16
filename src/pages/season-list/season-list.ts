import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MazeTvApi } from '../../providers/maze-tv-api';

import { EpisodeListPage } from '../episode-list/episode-list';

/*
  Generated class for the SeasonList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-season-list',
  templateUrl: 'season-list.html'
})
export class SeasonListPage {
  selectedShow: any;
  seasons: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mazeTvApi: MazeTvApi) {
    this.seasons = [];
    this.selectedShow = this.navParams.data;
    this.loadSeasons();
  }

  ionViewDidLoad() {
    console.log('Hello SeasonListPage Page');
  }

  loadSeasons() {
    this.mazeTvApi.getShowSeasons(this.selectedShow.show.id).subscribe(obs => {
      this.seasons = obs.json();
    }, error => {
      console.debug(error);
    })
  }

  getEpisodes(season) {
    var params = {
      selectedShow: this.selectedShow,
      selectedSeason: season
    };
    this.navCtrl.push(EpisodeListPage, params);
  }

}
