import { Component, OnInit } from '@angular/core';

import { ParrotSearch } from '../parrotSearch';
import { ParrotSearchService } from '../parrot-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor (private searchService: ParrotSearchService) { }

  ngOnInit() { }

  //accept all the search parameters from the search form
  search(URL: string, n: string, searchPhrase: string, searchType: string): void {
    console.log("Search received some terms!");
    // trim the incoming strings just in case the user left whitespace on either side
    URL = URL.trim();
    searchPhrase = searchPhrase.trim();
    searchType = searchType.trim();

    //pass them to the search service
    this.searchService.postSearch( {URL, n, searchPhrase, searchType} as ParrotSearch);
  }

}
