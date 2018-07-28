import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import { ParrotSearch } from '../parrot-search';
import { ParrotReturn } from '../parrot-return';
import { ParrotSearchService } from '../parrot-search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  data: ParrotReturn;

  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    this.searchService.data.subscribe((success) => {this.data = JSON.parse(success)});
    // console.log(this.data);
    this.buildPage();
  }

  buildPage() {
    $( '.gridDisplay' ).text(JSON.stringify(this.data.results));
  }



}
