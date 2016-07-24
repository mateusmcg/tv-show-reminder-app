import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TvShowProvider {

    private traktSearchUrl: string = "https://api.trakt.tv/search/show?extended=images&query=";
    private getShowsUrl: string = "https://api.trakt.tv/shows/{id}?extended=full,images";
    private getSeasonsUrl: string = "https://api.trakt.tv/shows/{id}/seasons?extended=full,images,episodes";

    constructor(private $http: Http) {
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        headers.append("trakt-api-key", "b0193b6297b2e397aeef7b832872e50752eae47b10c809f8dec7b98f34aafab1");
        headers.append("trakt-api-version", "2");
        return headers;
    }

    search(query: string) {
        let headers = this.getHeaders();
        return this.$http.get(this.traktSearchUrl + query, { headers: headers });
    }

    getShow(showId: number) {
        let url = this.getShowsUrl.replace("{id}", showId.toString());
        return this.$http.get(url, { headers: this.getHeaders() })
            .map((result) => result.json())
            .toPromise();
    }

    getSeasons(showId: number) {
        let url = this.getSeasonsUrl.replace("{id}", showId.toString());
        return this.$http.get(url, { headers: this.getHeaders() })
            .map((result) => result.json())
            .toPromise();
    }


}