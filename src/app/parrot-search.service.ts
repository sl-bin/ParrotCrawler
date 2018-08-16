import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ParrotSearch } from './parrot-search';
import { ParrotReturn } from './parrot-return';

// the http headers that define the content type
const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/json"),
  params: new HttpParams(),
  responseType: 'text' as 'json'
};


@Injectable({ providedIn: 'root' })
export class ParrotSearchService {

  //*vvvvvvvvvvvv*THIS MUST BE CHANGED FOR DEV VERSION*vvvvvvvvvvvv*//

  // change to "http://localhost:15943/post/"

  // node route URL to accept search POST request
  private nodeURL = "http://parrotcrawl.webfactional.com/api/events/";

  //*^^^^^^^^^^^^*THIS MUST BE CHANGED FOR DEV VERSION*^^^^^^^^^^^^*//

  private dataSource = new BehaviorSubject("null");
  data = this.dataSource.asObservable();
  private loadedSource = new BehaviorSubject(false);
  loaded = this.loadedSource.asObservable();
  private successSource = new BehaviorSubject(false);
  success = this.successSource.asObservable();

  constructor(private http: HttpClient) { }

  // from: https://angular.io/guide/http
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'An Error occurred. Please try again.');
  };

  // for updating loaded value from components
  updateLoaded(boolVal){
      this.loadedSource.next(boolVal);
      // console.log("loadedData made it back: " + this.loadedSource.getValue());
  }

  // for updating success value from components
  updateSuccess(boolVal){
      this.successSource.next(boolVal);
      // console.log("successData made it back: " + this.successSource.getValue());
  }

  // for updating success value from components
  updateData(strVal){
      this.dataSource.next(strVal);
      // console.log("successData made it back: " + this.successSource.getValue());
  }

  // method to recieve search input from form and POST to given URL
   postSearch(search: ParrotSearch): Observable<ParrotSearch> {
    //and make the post request
    return this.http.post<ParrotSearch>(this.nodeURL, search, httpOptions).pipe(
      catchError(this.handleError);
    );
  }
}
