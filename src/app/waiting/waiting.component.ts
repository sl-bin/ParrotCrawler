import { Component, OnInit } from '@angular/core';

import { ParrotSearchService } from '../parrot-search.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {

  wText: string = "Waiting for results";
  count: number = 0;
  btnStyle = "btnNoDisplay";
  loaded: Boolean;
  success: Boolean;
  stillWaiting: any;



  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    this.searchService.success.subscribe((success) => {this.success = success});
    this.searchService.loaded.subscribe((loaded) => {this.loaded = loaded});

    // this is function must be declared in this way within ngOnInit
    // in order for Angular and TyoeScript to render the timed sequence
    // and button correctly
    this.stillWaiting = setInterval(() => {
      if(!this.loaded && !this.success){
        // for testing
        // console.log(this.loaded);
        // console.log(this.success);

        if(this.count%4 != 0){
          this.wText += ".";
          this.count++;
        } else{
          this.wText = "Waiting for results";
          this.count++;
        }
      } else if(this.loaded && this.success) {
        // for testing
        // console.log(this.loaded);
        // console.log(this.success);

        this.wText = "";
        this.btnStyle = "btn";
        clearInterval(this.stillWaiting);
      } else {
        this.wText = "";
        clearInterval(this.stillWaiting);
      }
    }, 1000);

  }
}
