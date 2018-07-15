import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators';

import { ParrotSearch } from '../parrotSearch';
import { ParrotSearchService } from '../parrot-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  homeForm: FormGroup;

  // states for asynchronous form use
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private searchService: ParrotSearchService) { }

  ngOnInit() {
    this.homeForm = this.fb.group({
      url: ['', [
        Validators.required
        // TODO: add url validation
        // Validators.pattern("^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$")
      ]],
      n: [1, [
        Validators.required,
        Validators.min(1),
        Validators.max(12)
      ]],
      searchPhrase: '',
      searchType: ['', [
        Validators.required
      ]]
    });
  }

  // get methods for passing homeForm members around
  get url() {
    return this.homeForm.get('url');
  };

  get n() {
    return this.homeForm.get('n');
  };

  get searchType() {
    return this.homeForm.get('searchType');
  };

  //accept all the search parameters from the search form
  search(URL: string, n: string, searchPhrase: string, searchType: string): void {
    console.log("Search received some terms!");
    // trim the incoming strings just in case the user left whitespace on either side
    URL = URL.trim();
    searchPhrase = searchPhrase.trim();
    searchType = searchType.trim();

    //pass them to the search service
    this.searchService.postSearch( {URL, n, searchPhrase, searchType} as ParrotSearch);

  // submission handler
  async onSubmit() {
    this.loading = true;

    const formValue = this.homeForm;

  //   try {
  //     await this.ps.
  //     this.success = true;
  //   } catch(err) {
  //     console.log(err);
  //   }
  //
  //   this.loading = false;
  // };

}
