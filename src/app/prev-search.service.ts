//this service calls up the localStorage items (encoded as ParrotSearch objects)
//that contain previous search terms
//and injects them into a drop-down on the search form page

import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { ParrotSearch } from './parrot-search';


//using this site as a reference: https://www.js-tutorials.com/javascript-tutorial/use-localstorage-sessionstorage-using-webstorage-angular4/
@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    //if this is the first entry in localStorage
    //set the number of values stored in localStorage as key number 0
    if(!this.storage.get("0")){
      this.storage.set("0", "0");
    }
  }


  //save function that accepts ParrotSearch objects to save to localstorage
  public saveInLocal(searchJSON): void {
    var prevTest = false;
    var keyCount = parseInt(this.storage.get("0"));

    for(var i = 0; i <= keyCount; i++) {
      let testJSON = JSON.parse( this.storage.get(String(i)) );
      if(testJSON.url === searchJSON.url && testJSON.n === searchJSON.n
        && testJSON.searchType === searchJSON.searchType
        && testJSON.searchPhrase === searchJSON.searchPhrase) {
        prevTest = true;
      }
    }

    if(!prevTest) {
      //get rid of the prevSearchDrop attribute
      delete searchJSON.prevSearchDrop;

      //save the search at the next index in the localStorage Array
      var searchString = JSON.stringify(searchJSON);
      var keyCount = parseInt(this.storage.get("0"));
      keyCount++;

      this.storage.set("0", String(keyCount));
      this.storage.set(String(keyCount), searchString);
    }

  }


  //get function that gets all the searches in localStorage
  public getFromLocal(): ParrotSearch[] {
    var searchArray: ParrotSearch[] = [];
    //get the number of search results from localStorage
    var keyCount = parseInt(this.storage.get("0"));

    //loop through the localStorage and save each search in the array
    for(var i = 0; i <= keyCount; i++) {
      let searchJSON = JSON.parse( this.storage.get(String(i)) );
      searchArray.push(searchJSON);
    }

    return searchArray;
  }
}
