import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParrotSearch } from './parrot-search'

// the http headers that define the content type
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })
export class ParrotSearchService {

  // node route URL to accept search POST request
  private nodeURL = "http://localhost:8000/api/search";

  constructor(private http: HttpClient) { }

  // method to recieve search input from form and POST to given URL
   postSearch(search: ParrotSearch): Observable<ParrotSearch> {
    //set the content type to be posted
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    console.log('Here we are in Angular, and the data sent to node is: ' + search);
    //and make the post request
    return this.http.post<ParrotSearch>(this.nodeURL, search, httpOptions);
  }

}
