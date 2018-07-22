import { Component, OnInit } from '@angular/core';

import { ParrotSearch } from '../parrot-search';
import { ParrotSearchService } from '../parrot-search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  data: string;

  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    this.searchService.data.subscribe((success) => {this.data = success});
  }

}
