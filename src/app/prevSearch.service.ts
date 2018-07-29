//this service calls up the localStorage items (encoded as ParrotSearch objects)
//that contain previous search terms
//and injects them into a drop-down on the search form page

import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-web_storage-service';
import { ParrotSearch } from './parrot-search';


//using this site as a reference: https://www.js-tutorials.com/javascript-tutorial/use-localstorage-sessionstorage-using-webstorage-angular4/
@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    //if this is the first entry in localStorage
    //set the number of values stored in localStorage as key number 0
    if(!this.storage.get("0")){
      console.log("Initializing localStorage");
      this.storage.set("0", "0");
    }
  }


  //save function that accepts ParrotSearch objects to save to localstorage
  public saveInLocal(searchJSON: ParrotSearch): void {
    //save the search at the next index in the array
    var searchString = JSON.stringify(searchJSON);
    var keyCount = parseInt(this.storage.get("0"));
    keyCount++;

    console.log("Saving search to localStorage: " + searchString);
    this.storage.set("0", String(keyCount));
    this.storage.set(String(keyCount), searchString);
  }


  //get function that gets all the searches in localStorage
  public getFromLocal():ParrotSearch[] {
    console.log("Retrieving values from localStorage: ");

    var searchArray: ParrotSearch[] = [];
    //get the number of search results from localStorage
    var numSearches = parseInt(this.storage.get("0"));

    //loop through the localStorage and save each search in the array
    for(var i = 0; i <= numSearches; i++) {
      let searchJSON = JSON.parse( this.storage.get(String(i)) );
      searchArray.push(searchJSON);
      console.log( i + ": " + this.storage.get(String(i)) );
    }
    
    return searchArray;
  }
}
