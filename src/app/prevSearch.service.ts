//this service calls up the localStorage items (encoded as ParrotSearch objects)
//that contain previous search terms
//and injects them into a drop-down on the search form page

import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from '../../node_modules/angular-web_storage-service';;
import { ParrotSearch } from './parrot-search';


@Injectable()
export class LocalStorageService {
  public data=[];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  //using this site as a reference: https://www.js-tutorials.com/javascript-tutorial/use-localstorage-sessionstorage-using-webstorage-angular4/

  //save function that accepts ParrotSearch objects to save to localstorage
  saveInLocal(searchJSON: ParrotSearch): void {
    //save the search at the next index in the array
    var curKey = String(this.data.length);
    var searchString = JSON.stringify(searchJSON);

    console.log("Here we are in previous-search.service @ save");
    console.log("The index of the search term recieved is" + curKey);
    console.log("And the search we are saving is " + searchString);

    this.storage.set(curKey, searchString);
  }

  //get function that gets all the searches in localStorage
  getFromLocal(): void {
    console.log("Here we are in previous-search.service @ get");
    console.log("And the values in localStorage are: ");

    for(var i = 0; i < this.data.length; i++) {
      this.data[i] = this.storage.get(String(i));
      console.log(i + ": " + this.data[i]);
    }

  }
}
