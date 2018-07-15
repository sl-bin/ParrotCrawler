import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators';

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

  constructor(private fb: FormBuilder) { }

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
