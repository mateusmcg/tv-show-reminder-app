import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MazeTvApi } from '../../providers/maze-tv-api';

/*
  Generated class for the EpisodeList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-episode-list',
  templateUrl: 'episode-list.html'
})
export class EpisodeListPage {
  selectedShow: any;
  selectedSeason: any;
  episodes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mazeTvApi: MazeTvApi) {
    this.episodes = [];
    this.selectedShow = this.navParams.data.selectedShow;
    this.selectedSeason = this.navParams.data.selectedSeason;
    this.loadEpisodes();
  }

  ionViewDidLoad() {
    console.log('Hello EpisodeListPage Page');
  }

  loadEpisodes(){
    this.mazeTvApi.getShowEpisodes(this.selectedShow.show.id, true).subscribe(ob =>{
      this.episodes = ob.json().filter(item => {
        return item.season == this.selectedSeason.number;
      });
    }, error =>{
      console.debug(error);
    })
  }

}
