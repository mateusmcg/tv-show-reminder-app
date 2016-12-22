import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { MyShowsPage } from '../pages/my-shows/my-shows';
import { ConfigPage } from '../pages/config/config';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { TvShowsPage } from '../pages/tv-shows/tv-shows';
import { SeasonListPage } from '../pages/season-list/season-list';
import { EpisodeListPage } from '../pages/episode-list/episode-list';
import { LoginPage } from '../pages/login/login';

// Providers
import { Database } from '../providers/database';
import { MazeTvApi } from '../providers/maze-tv-api';
import { Settings } from '../providers/settings';

@NgModule({
  declarations: [
    MyApp,
    MyShowsPage,
    SearchPage,
    ConfigPage,
    TabsPage,
    TvShowsPage,
    SeasonListPage,
    EpisodeListPage,
    LoginPage
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
    EpisodeListPage,
    LoginPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    Database,
    MazeTvApi,
    Settings
  ]
})
export class AppModule { }
