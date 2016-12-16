import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MazeTvApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MazeTvApi {

  baseUrl: String = "http://api.tvmaze.com";

  constructor(public http: Http) {
    console.log('Hello MazeTvApi Provider');
  }

  search(query) {
    let searchUri = "/search/shows?q=" + query;
    return this.http.get(this.baseUrl + searchUri);
  }

  getShowSeasons(showId) {
    let uri = "/shows/" + showId + "/seasons";
    return this.http.get(this.baseUrl + uri);
  }

  getShowEpisodes(showId, includeSpecials = true) {
    let uri = "/shows/" + showId + "/episodes";
    return this.http.get(this.baseUrl + uri);
  }

  getEpisodesBySeason(showId, seasonNumber) {
    let uri = "/shows/" + showId + "/episodes?season=" + seasonNumber;
    return this.http.get(this.baseUrl + uri);
  }

  getEpisodeFullInfo(showId, seasonNumber, episodeNumber) {
    let uri = "/shows/" + showId + "/episodebynumber?season=" + seasonNumber + "&number=" + episodeNumber;
    return this.http.get(this.baseUrl + uri);
  }

}
