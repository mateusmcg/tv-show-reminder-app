import {Component, OnInit, OnDestroy} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthProvider} from '../../provider/auth-provider';
import {TvShowProvider} from '../../provider/tvshow-provider';
import {ShowImagePipe} from '../../pipes/show-image-pipe';
import {AngularFire} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/myshows-page/myshows-page.html',
  pipes: [
    ShowImagePipe
  ]
})
export class MyShowsPage implements OnInit, OnDestroy {

  //private dbShows;
  private myShows;
  private requests;
  private isLoading: boolean;
  private subscription: any;

  constructor(private navController: NavController,
    private authProvider: AuthProvider,
    private tvShowProvider: TvShowProvider,
    private angularFire: AngularFire) {
    this.myShows = [];
    this.requests = [];
  }

  ngOnInit() {
    this.isLoading = true;
    this.loadShowsFromFirebase();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadShowsFromFirebase() {
    this.subscription = this.authProvider.getUserShows().subscribe(shows => {
      this.myShows = [];
      return shows.map((show) => {
        let showId = show.ids.trakt;
        this.tvShowProvider.getShow(showId).then(show => {
          this.myShows.push(show);
        });
      });
    });

    // .map((response) => {
    //   console.debug('Primeiro map', response);
    //   return response.forEach((item) => {
    //     console.debug('Foreach', item);
    //     return item.json();
    //   })
    // }).map((shows) => {
    //   console.debug('Segundo Map', shows);
    // });

    //.subscribe(
    //   shows => {
    //     this.dbShows = shows;
    //     if (shows.length > this.myShows.length)
    //       this.getMyShows();
    //   },
    //   error => {
    //     console.error(error);
    //   },
    //   () => {
    //     console.debug('Shows recuperados com sucesso');
    //   }
    // )
  }

  // getMyShows() {
  //   this.dbShows.map(item => {
  //     let id: number = item.ids.trakt;
  //     this.tvShowProvider.getShow(id)
  //       .map(response => response.json())
  //       .subscribe(
  //       show => {
  //         this.myShows.push(show);
  //         console.debug('Deu bom', show);
  //       },
  //       error => console.error('Deu ruim', error),
  //       () => {
  //         console.log('Sucesso');
  //       }
  //       );
  //   });
  // }

  showDetails(show: any) {

  }

  // removeShow(show: any) {
  //   let shows = this.angularFire.database.list('/' + this.authProvider.getAuth().uId + '/shows');
  //   let dbShow = this.dbShows.filter(item => item.ids.trakt == show.ids.trakt)[0];
  //   var index = this.myShows.indexOf(show);
  //   this.myShows.splice(index, 1);
  //   shows.remove(dbShow.$key);
  // }
}
