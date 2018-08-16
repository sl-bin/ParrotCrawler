import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ParrotSearch } from '../parrot-search';
import { ParrotSearchService } from '../parrot-search.service';
import { LocalStorageService } from '../prev-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  homeForm: FormGroup;

  // from https://gist.github.com/dperini/729294
  regex = new RegExp(
    "^" +
      // protocol identifier
      "(?:(?:https?|ftp)://)" +
      // user:pass authentication
      "(?:\\S+(?::\\S*)?@)?" +
      "(?:" +
        // IP address exclusion
        // private & local networks
        "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
        "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
        "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
        // IP address dotted notation octets
        // excludes loopback network 0.0.0.0
        // excludes reserved space >= 224.0.0.0
        // excludes network & broacast addresses
        // (first & last IP address of each class)
        "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
        "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
        "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
      "|" +
        // host name
        "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
        // domain name
        "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
        // TLD identifier
        "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
        // TLD may end with dot
        "\\.?" +
      ")" +
      // port number
      "(?::\\d{2,5})?" +
      // resource path
      "(?:[/?#]\\S*)?" +
    "$", "i"
  );

  constructor(private fb: FormBuilder, private searchService: ParrotSearchService, private searchStorage: LocalStorageService, private router: Router) { }

  //array to hold previous searches for displaying
  prevSearches =[]

  ngOnInit() {
    // this.searchService.success.subscribe(success => this.success = success);
    // this.searchService.loaded.subscribe(loaded => this.loaded = loaded);

    //get the searches from localStorage
    this.prevSearches = this.searchStorage.getFromLocal();

    this.prevDisplay();

    this.homeForm = this.fb.group({
      url: ['', [
        Validators.required,
        Validators.pattern(this.regex)
      ]],
      searchType: ['', [
        Validators.required
      ]],
      n: [1, [
        Validators.required,
        Validators.min(1)
      ]],
      searchPhrase: '',
      prevSearchDrop:[]
    }, { validator: this.conditionalTypeCheck("n", "searchType") });

    this.searchService.updateSuccess(false);
    this.searchService.updateLoaded(false);
  }

  // used by validators to compare n and searchType
  conditionalTypeCheck(n: string, searchType: string) {
    return (group: FormGroup) => {
      let testN = group.controls[n];
      let testType = group.controls[searchType];
      let hfError = true;

      // set error based on type and n values
      if(testType.value === "BFS") {
        if(testN.value > 4) {
          hfError = true;
        }
        else {
          hfError = false;
        }
      } else {
        if(testN.value > 12) {
          hfError = true;
        }
        else {
          hfError = false;
        }
      }

      // trace statement for testing
      // console.log(testN.value, testType.value, hfError);

      // return error or null if no error
      if(hfError) {
        return testN.setErrors({typeForNumber: true});
      } else {
        return testN.setErrors(null);
      }
    }
  }

  // get methods for passing homeForm members around
  get url() {
    return this.homeForm.get('url');
  };

  get n() {
    return this.homeForm.get('n');
  };

  get searchPhrase() {
    return this.homeForm.get('searchPhrase');
  };

  get searchType() {
    return this.homeForm.get('searchType');
  };

  //if there are no previous searches, don't display the select menu
  prevDisplay() {
    if(this.prevSearches.length > 1) {
      $( ".pastSearchDiv" ).removeClass( "hidden");
    }
  };



  //injects previous search menu selection into form fields
  onSelect(selectedSearch: ParrotSearch): void {
    this.url.setValue(selectedSearch.url);
    this.n.setValue(selectedSearch.n);
    this.searchType.setValue(selectedSearch.searchType);

    if(selectedSearch.searchPhrase != "") {
      this.searchPhrase.setValue(selectedSearch.searchPhrase);
    }
    else if(selectedSearch.searchPhrase == "") {
      this.searchPhrase.setValue("");
    }
  }


  // submission handler
  async onSubmit() {
    var source = new EventSource("http://localhost:12296/events/");
    const formValue = this.homeForm.value;

    // for debugging purposes
    // this.searchService.postSearch( formValue as ParrotSearch).subscribe();
    // this.success = true;
    // this.router.navigate(['/waiting']);

    //save the search in localStorage
    this.searchStorage.saveInLocal( formValue as ParrotSearch );

    // this try catch is for error handling
    try {
      await this.searchService.postSearch( formValue as ParrotSearch ).subscribe();
      this.router.navigate(['/waiting']);

      source.addEventListener('message', (event:any) => {
        this.searchService.updateData(event.data);
        this.searchService.updateSuccess(true);
        this.searchService.updateLoaded(true);
      });

      source.addEventListener('error', (event:any) => {
        this.searchService.updateData(event.data);
        this.searchService.updateSuccess(false);
        this.searchService.updateLoaded(true);
        console.log(event.data);
        this.router.navigate(['/error']);
      });

    } catch(err) {
      console.log(err);
      this.router.navigate(['/error']);
    }
  };
}
