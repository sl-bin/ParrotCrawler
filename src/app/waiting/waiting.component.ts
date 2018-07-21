import { Component, OnInit } from '@angular/core';

import { ParrotSearch } from '../parrot-search';
import { ParroReturn } from '../parrot-return';
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
  // ready: Boolean;

  constructor(private search: ParrotSearchService) { }

  ngOnInit() {
    // this.search.searchData.subscribe((ret) => {
    //   console.log(ret);
    // },
    // (err) => {
    //   console.log(err);
    //   this.router.navigate(['/error']);
    // },
    // () => {
    //   this.ready = true;
    // })

    setInterval(() => {
      if(1){
        this.wText = "";
        this.btnStyle = "btn";
      }
      else{
        if(this.count < 13){
          if(this.count%4 != 0){
            this.wText += ".";
            this.count++;
          }
          else{
            this.wText = "Waiting for results";
            this.count++;
          }
        }
      }
    }, 1000);
  }
}
