import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// this is the definition for the search input JSON
export interface ParrotSearch {
  URL: string;
  n: string;
  searchPhrase: string;
  searchType: string;
}


@Injectable()
export class ParrotSearchService {

  // node route URL to accept search POST request
  url = "/api/search";

  constructor(private http: HttpClient) { }

  // method to recieve search input from form and POST to given URL
  postSearch(search: ParrotSearch): Observable<ParrotSearch> {
    //set the content type to be posted
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    console.log('Here we are in Angular, and the data sent to node is: ' + ParrotSearch);
    //and make the post request
    return this.http.post<ParrotSearch>(this.url, search);
  }

}
