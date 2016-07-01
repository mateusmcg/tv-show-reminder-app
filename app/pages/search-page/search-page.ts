import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TvShowProvider} from '../../provider/tvshow-provider';
import {ShowImagePipe} from '../../pipes/show-image-pipe';
import {AngularFire} from 'angularfire2';
import {AuthProvider} from '../../provider/auth-provider';

@Component({
  templateUrl: 'build/pages/search-page/search-page.html',
  pipes: [ShowImagePipe]
})
export class SearchPage {

  private shows: any;

  constructor(private navController: NavController,
              private tvShowProvider: TvShowProvider,
              private angularFire: AngularFire,
              private authProvider: AuthProvider) {
  }

  getShows(evt){
      let query:string = evt.target.value;
      this.shows = this.tvShowProvider.search(query)
                        .map(response => response.json());
  }

  addShow(show:any){
      let userData = this.authProvider.getAuth();
      let showDb = this.angularFire.database.list('/' + userData.uId + '/shows');
      let showData = {
        name: show.show.title,
        ids: show.show.ids
      }
      showDb.push(showData);
  }
}
