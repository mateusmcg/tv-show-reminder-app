import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyShowsPage } from '../pages/my-shows/my-shows';
import { ConfigPage } from '../pages/config/config';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { TvShowsPage } from '../pages/tv-shows/tv-shows';

import { Database } from '../providers/database';

@NgModule({
  declarations: [
    MyApp,
    MyShowsPage,
    SearchPage,
    ConfigPage,
    TabsPage,
    TvShowsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyShowsPage,
    SearchPage,
    ConfigPage,
    TabsPage,
    TvShowsPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    Database
  ]
})
export class AppModule { }
