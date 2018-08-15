import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ParrotSearch } from '../parrot-search';
import { ParrotSearchService } from '../parrot-search.service';
import { LocalStorageService } from '../prevSearch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  homeForm: FormGroup;

  // TODO: edit regex to allow for http and www to be left off
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
      n: [1, [
        Validators.required,
        Validators.min(1),
        Validators.max(4)
      ]],
      searchPhrase: '',
      searchType: ['', [
        Validators.required
      ]],
      prevSearchDrop:[]
    });

    this.searchService.updateSuccess(false);
    this.searchService.updateLoaded(false);
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
    let event.data=null;
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

      source.addEventListener('message', event => {
        console.log(event.data);
        this.searchService.updateData(event.data);
        this.searchService.updateSuccess(true);
        this.searchService.updateLoaded(true);
      });

      source.addEventListener('error', event => {
        console.log(event.data);
        this.router.navigate(['/error']);
      });

    } catch(err) {
      console.log(err);
      this.router.navigate(['/error']);
    }
  };
}
