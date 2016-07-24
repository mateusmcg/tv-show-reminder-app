import {Injectable} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Injectable()
export class AuthProvider {

  private email: string;
  private displayName: string;
  private isAuthenticated: boolean;
  private uid: string;
  private provider: number;
  private shows;

  constructor(private angularFire : AngularFire) {
  }

  setAuth(authData: any){
      this.email = authData.email;
      this.displayName = authData.displayName;
      this.isAuthenticated = true;
      this.uid = authData.uid;
      this.provider = authData.provider;
      this.shows = authData.shows;
  }

  getAuth(){
      return{
          email: this.email,
          displayName: this.displayName,
          isAuth: this.isAuthenticated,
          uId: this.uid,
          provider: this.provider,
          shows: this.shows
      }
  }

  getUserShows(){
      return this.angularFire.database.list('/' + this.uid + '/shows');
  }
}