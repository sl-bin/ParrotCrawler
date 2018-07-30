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

  testString: any = {"input":{"url":"http://www.google.com","n":1,"type":"rdfs","search":""},"dimensions":{"height":2,"width":33},"results":[{"id":0,"depth":0,"title":"Google","url":"http://www.google.com","dead":0,"found":0,"links":33,"children":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},{"id":1,"depth":1,"title":"Google Images","url":"http://www.google.com/imghp?hl=en&tab=wi","dead":0,"found":0,"links":0,"children":[]},{"id":2,"depth":1,"title":"Google","url":"https://www.google.com/webhp?tab=ww","dead":0,"found":0,"links":0,"children":[]},{"id":3,"depth":1,"title":"  Google Maps  ","url":"http://maps.google.com/maps?hl=en&tab=wl","dead":0,"found":0,"links":0,"children":[]},{"id":4,"depth":1,"title":"Google Play","url":"https://play.google.com/?hl=en&tab=w8","dead":0,"found":0,"links":0,"children":[]},{"id":5,"depth":1,"title":"YouTube","url":"http://www.youtube.com/?gl=US&tab=w1","dead":0,"found":0,"links":0,"children":[]},{"id":6,"depth":1,"title":"Google News","url":"http://news.google.com/nwshp?hl=en&tab=wn","dead":0,"found":0,"links":0,"children":[]},{"id":7,"depth":1,"title":"Gmail","url":"https://mail.google.com/mail/?tab=wm","dead":0,"found":0,"links":0,"children":[]},{"id":8,"depth":1,"title":"Meet Google Drive – One place for all your files","url":"https://drive.google.com/?tab=wo","dead":0,"found":0,"links":0,"children":[]},{"id":9,"depth":1,"title":"Our products | Google","url":"https://www.google.com/intl/en/options/","dead":0,"found":0,"links":0,"children":[]},{"id":10,"depth":1,"title":"Google Calendar","url":"https://www.google.com/calendar?tab=wc","dead":0,"found":0,"links":0,"children":[]},{"id":11,"depth":1,"title":"Google Translate","url":"http://translate.google.com/?hl=en&tab=wT","dead":0,"found":0,"links":0,"children":[]},{"id":12,"depth":1,"title":"Google - Apps","url":"http://www.google.com/mobile/?hl=en&tab=wD","dead":0,"found":0,"links":0,"children":[]},{"id":13,"depth":1,"title":"Google Books","url":"https://books.google.com/bkshp?hl=en&tab=wp","dead":0,"found":0,"links":0,"children":[]},{"id":14,"depth":1,"title":"Google Shopping","url":"http://www.google.com/shopping?hl=en&tab=wf","dead":0,"found":0,"links":0,"children":[]},{"id":15,"depth":1,"title":"Blogger.com - Create a unique and beautiful blog. It’s easy and free.","url":"http://www.blogger.com/?tab=wj","dead":0,"found":0,"links":0,"children":[]},{"id":16,"depth":1,"title":"finance - Google Search","url":"http://www.google.com/finance?tab=we","dead":0,"found":0,"links":0,"children":[]},{"id":17,"depth":1,"title":"Google Photos - All your photos organized and easy to find","url":"https://photos.google.com/?tab=wq&pageId=none","dead":0,"found":0,"links":0,"children":[]},{"id":18,"depth":1,"title":"Google Videos","url":"http://video.google.com/?hl=en&tab=wv","dead":0,"found":0,"links":0,"children":[]},{"id":19,"depth":1,"title":"Google Docs - create and edit documents online, for free.","url":"https://docs.google.com/document/?usp=docs_alc","dead":0,"found":0,"links":0,"children":[]},{"id":20,"depth":1,"title":"Our products | Google","url":"https://www.google.com/intl/en/options/","dead":0,"found":0,"links":0,"children":[]},{"id":21,"depth":1,"title":"Sign in - Google Accounts","url":"https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=http://www.google.com/","dead":0,"found":0,"links":0,"children":[]},{"id":22,"depth":1,"title":"Preferences","url":"http://www.google.com/preferences?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":23,"depth":1,"title":"Preferences","url":"http://www.google.com/preferences?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":24,"depth":1,"title":" Google - Search Customization ","url":"http://www.google.com/history/optout?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":25,"depth":1,"title":"María Rebeca Latigo de Hernández - Google Search","url":"http://www.google.com/search?site=&q=Mar%C3%ADa+Rebeca+Latigo+de+Hern%C3%A1ndez&oi=ddle&ct=maria-rebecca-latigo-de-hernandezs-122nd-birthday-4741691587166208-l&hl=en&kgmid=/m/0806ym8&sa=X&ved=0ahUKEwjYiayRtsXcAhVDZKwKHVkmDy0QPQgD","dead":0,"found":0,"links":0,"children":[]},{"id":26,"depth":1,"title":"Google Advanced Search","url":"http://www.google.com/advanced_search?hl=en&authuser=0","dead":0,"found":0,"links":0,"children":[]},{"id":27,"depth":1,"title":"Google Translate","url":"http://www.google.com/language_tools?hl=en&authuser=0","dead":0,"found":0,"links":0,"children":[]},{"id":28,"depth":1,"title":"\n      Google Ads - PPC Online Advertising to Reach Your Marketing Goals\n    ","url":"http://www.google.com/intl/en/ads/","dead":0,"found":0,"links":0,"children":[]},{"id":29,"depth":1,"title":"\n      Google Business Solutions - Online Marketing Tools & Apps for Your Business\n    ","url":"http://www.google.com/services/","dead":0,"found":0,"links":0,"children":[]},{"id":30,"depth":1,"title":"Google - Google+","url":"https://plus.google.com/116899029375914044550","dead":0,"found":0,"links":0,"children":[]},{"id":31,"depth":1,"title":"Our latest | Google","url":"http://www.google.com/intl/en/about.html","dead":0,"found":0,"links":0,"children":[]},{"id":32,"depth":1,"title":"","url":"http://www.google.com/intl/en/policies/privacy/","dead":0,"found":0,"links":0,"children":[]},{"id":33,"depth":1,"title":"","url":"http://www.google.com/intl/en/policies/terms/","dead":0,"found":0,"links":0,"children":[]}]};

  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    // this.searchService.data.subscribe((success) => {this.data = JSON.parse(success)});
    this.data = this.testString;
    this.buildPage(this.data);
  }



  buildPage(data) {
    // local var that stores blank (non-dynamic) div
    var gDiv = $( ".gridNode" );

    // clone the blank div into the viewWindow to make the grid
    for(var i: number=1; i <= (data.dimensions.height*2)*(data.dimensions.width+2); i++) {
      $(gDiv).clone().appendTo(".gridDisplay").removeClass("hidden").attr("id", "node" + String(i));;
    }

    //style the topNode
    $("#node" + String(Math.floor((data.dimensions.width+2)/2))).addClass("topNode");

    // set the top nodes html
    $("#node" + String(Math.floor((data.dimensions.width+2)/2))).append(
      "<p>"+ data.results[0].title + "</p>" +
      "<p>"+ data.results[0].url + "</p>" +
      "<p>links: "+ data.results[0].links + "</p>"
    );

    for(var i: number=1; i <= data.results[0].links; i++) {
      $("#node" + String(Math.floor(((data.dimensions.width+2)*2)+1 + i))).addClass("normalNode");
      if(data.results[data.results[0].children[i-1]].title === ""){
        $("#node" + String(Math.floor(((data.dimensions.width+2)*2)+1 + i))).append(
          "<p>No Title</p>"
        );
      } else {
        $("#node" + String(Math.floor(((data.dimensions.width+2)*2)+1 + i))).append(
          "<p>"+ data.results[data.results[0].children[i-1]].title + "</p>"
        );
      }

      $("#node" + String(Math.floor(((data.dimensions.width+2)*2)+1 + i))).append(
        "<p>"+ data.results[data.results[0].children[i-1]].url + "</p>"
      );

      if(data.results[data.results[0].children[i-1]].depth + 1 === data.dimensions.height){
        $("#node" + String(Math.floor(((data.dimensions.width+2)*2)+1 + i))).append(
          "<p>links: N/A</p>"
        );
      } else {
        $("#node" + String(Math.floor(((data.dimensions.width+2)*2)+1 + i))).append(
          v
        );
      }



    }

    $( ".gridDisplay" ).css("grid-template-rows","repeat(" + String((data.dimensions.height*2)+1) + ", 150px 75px)");
    $( ".gridDisplay" ).css("grid-template-columns","repeat(" + String(data.dimensions.width+2) + ", 300px)");
  }

  zoomIn() {
    switch($(".gridDisplay").attr("class")) {
      case "gridDisplay out1": $(".gridDisplay").removeClass("out1").addClass("out2");
      break;
      case "gridDisplay out2": $(".gridDisplay").removeClass("out2").addClass("out3");
      break;
      case "gridDisplay out3": $(".gridDisplay").removeClass("out3").addClass("noZoom");
      break;
      case "gridDisplay noZoom": $(".gridDisplay").removeClass("noZoom").addClass("in1");
      break;
      case "gridDisplay in1": $(".gridDisplay").removeClass("in1").addClass("in2");
      break;
      case "gridDisplay in2":
      break;
    }
  }

  zoomOut() {
    switch($(".gridDisplay").attr("class")) {
      case "gridDisplay out1":
      break;
      case "gridDisplay out2": $(".gridDisplay").removeClass("out2").addClass("out1");
      break;
      case "gridDisplay out3": $(".gridDisplay").removeClass("out3").addClass("out2");
      break;
      case "gridDisplay noZoom": $(".gridDisplay").removeClass("noZoom").addClass("out3");
      break;
      case "gridDisplay in1": $(".gridDisplay").removeClass("in1").addClass("noZoom");
      break;
      case "gridDisplay in2": $(".gridDisplay").removeClass("in2").addClass("in1");
      break;
    }
  }

}
