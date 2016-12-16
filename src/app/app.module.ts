import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyShowsPage } from '../pages/my-shows/my-shows';
import { ConfigPage } from '../pages/config/config';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { TvShowsPage } from '../pages/tv-shows/tv-shows';
import { SeasonListPage } from '../pages/season-list/season-list';
import { EpisodeListPage } from '../pages/episode-list/episode-list';

import { Database } from '../providers/database';
import { MazeTvApi } from '../providers/maze-tv-api';

@NgModule({
  declarations: [
    MyApp,
    MyShowsPage,
    SearchPage,
    ConfigPage,
    TabsPage,
    TvShowsPage,
    SeasonListPage,
    EpisodeListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyShowsPage,
    SearchPage,
    ConfigPage,
    TabsPage,
    TvShowsPage,
    SeasonListPage,
    EpisodeListPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    Database,
    MazeTvApi
  ]
})
export class AppModule { }
