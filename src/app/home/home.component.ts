import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ParrotSearch } from '../parrot-search';
import { ParrotSearchService } from '../parrot-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ ParrotSearchService ],
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  homeForm: FormGroup;

  // states for asynchronous form use
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private searchService: ParrotSearchService, private router: Router) { }

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

  // submission handler
  onSubmit() {
    this.loading = true;

    const formValue = this.homeForm.value;

    // for debugging purposes
    // this.searchService.postSearch( formValue as ParrotSearch).subscribe();
    // this.success = true;
    // this.router.navigate(['/waiting']);

    // this elaborate try catch is for error handling
    try {
      this.searchService.postSearch( formValue as ParrotSearch ).subscribe(
        () => {
          this.success = true;
          this.router.navigate(['/waiting']);
        },
        (err) => {
          console.log(err);
          this.router.navigate(['/error']);
        }
      );
    } catch(err) {
      console.log(err);
      this.router.navigate(['/error']);
    }
    this.loading = false;
  };
}
