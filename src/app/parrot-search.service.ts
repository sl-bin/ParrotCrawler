import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  //*vvvvvvvvvvvv*THIS MUST BE CHANGED FOR PROD VERSION*vvvvvvvvvvvv*//

  // change to "ws://localhost:15943/search/"

  // node route URL to accept search POST request
  private nodeURL = "http://parrotcrawl.webfactional.com/api/search";
  private ws = new WebSocket(this.nodeURL);

  //*^^^^^^^^^^^^*THIS MUST BE CHANGED FOR PROD VERSION*^^^^^^^^^^^^*//

  private dataSource = new BehaviorSubject("null");
  data = this.dataSource.asObservable();
  private loadedSource = new BehaviorSubject(false);
  loaded = this.loadedSource.asObservable();
  private successSource = new BehaviorSubject(false);
  success = this.successSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

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
   socketSearch(search: ParrotSearch) {
    //handle errors with the WebSocket
    if(this.ws.readyState === this.ws.CLOSED || this.ws.readyState === this.ws.CLOSING){
      console.log("WebSocket is not open!")
      this.router.navigate(['/error']);
    }
    else{
      //send over the search terms
      this.ws.send(JSON.stringify(search));
      //navigate the user to the waiting page
      this.router.navigate(['/waiting']);
    }

    //wait for the server response
    this.ws.addEventListener('message', (event:any) => {
      console.log("Data recieved");
      //update the event handlers
      this.updateData(event.data);
      this.updateSuccess(true);
      this.updateLoaded(true);
    });
  }
}
