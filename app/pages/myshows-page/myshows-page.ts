import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthProvider} from '../../provider/auth-provider';
import {TvShowProvider} from '../../provider/tvshow-provider';

@Component({
  templateUrl: 'build/pages/myshows-page/myshows-page.html'
})
export class MyShowsPage {

  private dbShows: any;
  private myShows = [];

  constructor(private navController: NavController,
              private authProvider: AuthProvider,
              private tvShowProvider : TvShowProvider) {
      this.dbShows = authProvider.getAuth().shows;
      this.getMyShows();
  }

  getMyShows(){
    let $this = this;
    this.dbShows.map(item => {
      let id:number = item.ids.trakt;
      $this.tvShowProvider.getShow(id)
            .map(response => response.json())
            .subscribe(
              show => {
                $this.tvShowProvider.getSeasons(id)
                  .map(response => response.json())
                  .subscribe(
                    seasons =>{
                      show.seasons = seasons;
                      $this.myShows.push(show);
                      console.debug('Deu bom', show);
                    },
                    error => console.error('Deu ruim', error),
                    () => console.debug('Acabou')
                  );
              },
              error => console.error('Deu ruim', error),
              () => console.log('Sucesso')
            );
    });
  }
}
