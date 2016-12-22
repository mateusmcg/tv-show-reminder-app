import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

/*
  Generated class for the Settings provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Settings {

  private theme: BehaviorSubject<String>;

  constructor(public http: Http) {
    console.log('Hello Settings Provider');
    this.theme = new BehaviorSubject('default-theme');
  }


  applyTheme(selectedTheme) {
    this.theme.next(selectedTheme);
  }

  getTheme() {
    return this.theme.asObservable();
  }

}
