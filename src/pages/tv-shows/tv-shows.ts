import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Database } from '../../providers/database';

class Todo { public title: string; public completed: boolean; constructor() { this.title = ''; this.completed = false; } }

/*
  Generated class for the TvShows page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tv-shows',
  templateUrl: 'tv-shows.html'
})
export class TvShowsPage {
  //todo: Todo;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public _db: Database) {
//    this.todo = new Todo();
  }

  save() {
    // var key = this._db.save(this.todo);
    // if (key) {
    //   let toast = this.toastCtrl.create({
    //     message: 'Todo Saved',
    //     duration: 500
    //   });

    //   toast.onDidDismiss(() => {
    //     this.navCtrl.pop();
    //     console.log('Dismissed toast');
    //   });

    //   toast.present();

    //   console.log('saved', key);
    // }
  }

  ionViewDidLoad() {
    console.log('Hello TvShowsPage Page');
  }

}
