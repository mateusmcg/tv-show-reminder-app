import { Component } from '@angular/core';

import { MyShowsPage } from '../my-shows/my-shows';
import { SearchPage } from '../search/search';
import { ConfigPage } from '../config/config';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  myshowTab: any = MyShowsPage;
  searchTab: any = SearchPage;
  configTab: any = ConfigPage;

  constructor() {
    
  }
}
