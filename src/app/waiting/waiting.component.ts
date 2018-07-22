import { Component, OnInit } from '@angular/core';

// import { ParrotSearch } from '../parrot-search';
// import { ParroReturn } from '../parrot-return';
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
  stillWaiting;



  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    this.searchService.success.subscribe((success) => {this.success = success});
    this.searchService.loaded.subscribe((loaded) => {this.loaded = loaded});

    this.stillWaiting = setInterval(() => {
      if(!this.loaded && !this.success){
        // for testing
        console.log(this.loaded);
        console.log(this.success);

        if(this.count%4 != 0){
          this.wText += ".";
          this.count++;
        } else{
          this.wText = "Waiting for results";
          this.count++;
        }

        // TODO add error rederection here
      } else {
        // for testing
        console.log(this.loaded);
        console.log(this.success);

        this.wText = "";
        this.btnStyle = "btn";
        clearInterval(this.stillWaiting);
      }
    }, 1000);

  }
}
