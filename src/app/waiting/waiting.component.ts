import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {

  wText: string = "Waiting for results";
  count: number = 0;
  btnStyle = "btnNoDisplay";

  constructor() { }

  ngOnInit() {
    setInterval(() => {
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
      else{
        this.wText = "";
        this.btnStyle = "btn";
      }
    }, 1000);
  }
}
