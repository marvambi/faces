import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchFacesService {

  private searchFacesEndPoint = "https://api.github.com/search/users?q=";
  private getFaceDetailsEndPoint = "https://api.github.com/users/";

  constructor(private http: Http) { }
  
  getFacesByPlaceAndlanguage(place: string, language: string) {
    let url;
    if (place && !language) {
      url = `${this.searchFacesEndPoint}location:${place}`;
    } else if (!place && language) {
      url = `${this.searchFacesEndPoint}language:${language}`;
    } else {
      url = `${this.searchFacesEndPoint}location:${place}+language:${language}`;
    }
    return this.http.get(url)
    .map(this.extractData)
    .catch(this.handleError);
  }
  getDetailsByFaceName(facename: string) {
    if (facename) {
      let url = `${this.getFaceDetailsEndPoint}${facename}`;
      return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
    }
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
