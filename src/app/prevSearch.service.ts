//this service calls up the localStorage items (encoded as ParrotSearch objects)
//that contain previous search terms
//and injects them into a drop-down on the search form page

import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-web_storage-service';
import { ParrotSearch } from './parrot-search';

var keyCount;

//using this site as a reference: https://www.js-tutorials.com/javascript-tutorial/use-localstorage-sessionstorage-using-webstorage-angular4/
@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    //set the number of values stored in localStorage as key number 0
    console.log("Here we are in prevSearch.service at the constructor");
    console.log("Number of items in localStorage is " + String(this.storage.get("0")));

    if(!this.storage.get("0")){
      console.log("Initializing storage space");
      keyCount = 0;
      this.storage.set("0", "0");
    }
  }


  //save function that accepts ParrotSearch objects to save to localstorage
  public saveInLocal(searchJSON: ParrotSearch): void {
    //save the search at the next index in the array
    //var curKey = parseInt(this.storage.get("0"));
    var searchString = JSON.stringify(searchJSON);
    keyCount++;

    console.log("Here we are in previous-search.service @ save");
    console.log("The index of the search term recieved is " + keyCount);
    console.log("And the search we are saving is " + searchString);
    this.storage.set("0", String(keyCount));
    this.storage.set(String(keyCount), searchString);
  }


  //get function that gets all the searches in localStorage
  public getFromLocal(): void {
    console.log("Here we are in previous-search.service @ get");
    console.log("And the values in localStorage are: ");

    var searchArray: ParrotSearch[] = [];
    //get the number of search results from localStorage
    //var numSearches = parseInt(this.storage.get("0"));

    //loop through the localStorage and save each search in the array
    for(var i = 0; i <= keyCount; i++) {
      let searchJSON = JSON.parse( this.storage.get(String(i)) );
      searchArray.push(searchJSON);
      console.log( i + ": " + this.storage.get(String(i)) );
    }

  }
}
