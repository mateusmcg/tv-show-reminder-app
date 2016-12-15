import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/operator/map';

/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var firebase;
@Injectable()
export class Database {
  private _todos$: any;
  private _db: any;
  private _usersRef: any;

  constructor(public http: Http) {
    console.log('Database Provider Started');
    this._db = firebase.database().ref('/'); // Get a firebase reference to the root 
    this._usersRef = firebase.database().ref('users'); // Get a firebase reference to the todos
    this._usersRef.on('child_added', this.handleData, this); // ***ADD THIS LINE***
    this._todos$ = new ReplaySubject();
  }

  get todos() {
    return this._todos$;
  }

  save(todo) {
    return this._usersRef.push(todo).key;
  }

  handleData(snap) {
    console.debug(snap);
    try {
      // Tell our observer we have new data 
      this._todos$.next(snap.val());
    }
    catch (error) {
      console.log('catching', error);
    }
  }

}
