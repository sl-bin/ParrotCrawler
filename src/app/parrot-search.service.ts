import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ParrotSearch } from './parrot-search';
import { ParrotReturn } from './parrot-return';


@Injectable({ providedIn: 'root' })
export class ParrotSearchService {

  //*vvvvvvvvvvvv*THIS MUST BE CHANGED FOR PROD VERSION*vvvvvvvvvvvv*//

  // change to "ws://parrotcrawl.webfactional.com/api/search/"

  // node route URL to accept search POST request
  private nodeURL = "ws://localhost:15943/search/";
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

  connectSock(){
    this.ws = new WebSocket(this.nodeURL);
  }

  // method to send search terms and recieve search results to/from node via WebSockets
  socketSearch(search: ParrotSearch) {
    //handle errors with the WebSocket
    if(this.ws.readyState === this.ws.CLOSED || this.ws.readyState === this.ws.CLOSING){
      try{
          this.connectSock();
      }
      catch(err){
        console.log("WebSocket is not open!")
        this.router.navigate(['/error']);
      }
    }
    else{
      //send over the search terms
      this.ws.send(JSON.stringify(search));
      //navigate the user to the waiting page
      this.router.navigate(['/waiting']);
    }

    // this.ws.addEventListener('close', (event:any) => {
    //   console.log("WebSocket is not open!")
    //   this.router.navigate(['/error']);
    // });

    //recieve the search terms
    if(this.ws.readyState === this.ws.CLOSED || this.ws.readyState === this.ws.CLOSING){
      try{
          this.connectSock();
      }
      catch(err){
        console.log("WebSocket is not open!")
        this.router.navigate(['/error']);
      }
    }
    else{
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
}
