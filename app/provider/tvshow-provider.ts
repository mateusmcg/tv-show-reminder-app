import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TvShowProvider {

  private traktUrl: string = "https://api.trakt.tv/search/show?extended=images&query=";

  constructor(private $http: Http) {
  }

  getHeaders(){
      let headers = new Headers();
      headers.append("Content-type", "application/json");
      headers.append("trakt-api-key", "b0193b6297b2e397aeef7b832872e50752eae47b10c809f8dec7b98f34aafab1");
      headers.append("trakt-api-version", "2");
      return headers;
  }

  search(query:string){
      let headers = this.getHeaders();
      return this.$http.get(this.traktUrl + query, { headers: headers });
  }
}