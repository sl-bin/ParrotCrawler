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

  // testString: any = {"input":{"url":"http://www.google.com","n":1,"type":"rdfs","search":""},"dimensions":{"height":2,"width":33},"results":[{"id":0,"depth":0,"title":"Google","url":"http://www.google.com","dead":0,"found":0,"links":33,"children":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},{"id":1,"depth":1,"title":"Google Images","url":"http://www.google.com/imghp?hl=en&tab=wi","dead":0,"found":0,"links":0,"children":[]},{"id":2,"depth":1,"title":"Google","url":"https://www.google.com/webhp?tab=ww","dead":0,"found":0,"links":0,"children":[]},{"id":3,"depth":1,"title":"  Google Maps  ","url":"http://maps.google.com/maps?hl=en&tab=wl","dead":0,"found":0,"links":0,"children":[]},{"id":4,"depth":1,"title":"Google Play","url":"https://play.google.com/?hl=en&tab=w8","dead":0,"found":0,"links":0,"children":[]},{"id":5,"depth":1,"title":"YouTube","url":"http://www.youtube.com/?gl=US&tab=w1","dead":0,"found":0,"links":0,"children":[]},{"id":6,"depth":1,"title":"Google News","url":"http://news.google.com/nwshp?hl=en&tab=wn","dead":0,"found":0,"links":0,"children":[]},{"id":7,"depth":1,"title":"Gmail","url":"https://mail.google.com/mail/?tab=wm","dead":0,"found":0,"links":0,"children":[]},{"id":8,"depth":1,"title":"Meet Google Drive – One place for all your files","url":"https://drive.google.com/?tab=wo","dead":0,"found":0,"links":0,"children":[]},{"id":9,"depth":1,"title":"Our products | Google","url":"https://www.google.com/intl/en/options/","dead":0,"found":0,"links":0,"children":[]},{"id":10,"depth":1,"title":"Google Calendar","url":"https://www.google.com/calendar?tab=wc","dead":0,"found":0,"links":0,"children":[]},{"id":11,"depth":1,"title":"Google Translate","url":"http://translate.google.com/?hl=en&tab=wT","dead":0,"found":0,"links":0,"children":[]},{"id":12,"depth":1,"title":"Google - Apps","url":"http://www.google.com/mobile/?hl=en&tab=wD","dead":0,"found":0,"links":0,"children":[]},{"id":13,"depth":1,"title":"Google Books","url":"https://books.google.com/bkshp?hl=en&tab=wp","dead":0,"found":0,"links":0,"children":[]},{"id":14,"depth":1,"title":"Google Shopping","url":"http://www.google.com/shopping?hl=en&tab=wf","dead":0,"found":0,"links":0,"children":[]},{"id":15,"depth":1,"title":"Blogger.com - Create a unique and beautiful blog. It’s easy and free.","url":"http://www.blogger.com/?tab=wj","dead":0,"found":0,"links":0,"children":[]},{"id":16,"depth":1,"title":"finance - Google Search","url":"http://www.google.com/finance?tab=we","dead":0,"found":0,"links":0,"children":[]},{"id":17,"depth":1,"title":"Google Photos - All your photos organized and easy to find","url":"https://photos.google.com/?tab=wq&pageId=none","dead":0,"found":0,"links":0,"children":[]},{"id":18,"depth":1,"title":"Google Videos","url":"http://video.google.com/?hl=en&tab=wv","dead":0,"found":0,"links":0,"children":[]},{"id":19,"depth":1,"title":"Google Docs - create and edit documents online, for free.","url":"https://docs.google.com/document/?usp=docs_alc","dead":0,"found":0,"links":0,"children":[]},{"id":20,"depth":1,"title":"Our products | Google","url":"https://www.google.com/intl/en/options/","dead":0,"found":0,"links":0,"children":[]},{"id":21,"depth":1,"title":"Sign in - Google Accounts","url":"https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=http://www.google.com/","dead":0,"found":0,"links":0,"children":[]},{"id":22,"depth":1,"title":"Preferences","url":"http://www.google.com/preferences?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":23,"depth":1,"title":"Preferences","url":"http://www.google.com/preferences?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":24,"depth":1,"title":" Google - Search Customization ","url":"http://www.google.com/history/optout?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":25,"depth":1,"title":"María Rebeca Latigo de Hernández - Google Search","url":"http://www.google.com/search?site=&q=Mar%C3%ADa+Rebeca+Latigo+de+Hern%C3%A1ndez&oi=ddle&ct=maria-rebecca-latigo-de-hernandezs-122nd-birthday-4741691587166208-l&hl=en&kgmid=/m/0806ym8&sa=X&ved=0ahUKEwjYiayRtsXcAhVDZKwKHVkmDy0QPQgD","dead":0,"found":0,"links":0,"children":[]},{"id":26,"depth":1,"title":"Google Advanced Search","url":"http://www.google.com/advanced_search?hl=en&authuser=0","dead":0,"found":0,"links":0,"children":[]},{"id":27,"depth":1,"title":"Google Translate","url":"http://www.google.com/language_tools?hl=en&authuser=0","dead":0,"found":0,"links":0,"children":[]},{"id":28,"depth":1,"title":"\n      Google Ads - PPC Online Advertising to Reach Your Marketing Goals\n    ","url":"http://www.google.com/intl/en/ads/","dead":0,"found":0,"links":0,"children":[]},{"id":29,"depth":1,"title":"\n      Google Business Solutions - Online Marketing Tools & Apps for Your Business\n    ","url":"http://www.google.com/services/","dead":0,"found":0,"links":0,"children":[]},{"id":30,"depth":1,"title":"Google - Google+","url":"https://plus.google.com/116899029375914044550","dead":0,"found":0,"links":0,"children":[]},{"id":31,"depth":1,"title":"Our latest | Google","url":"http://www.google.com/intl/en/about.html","dead":0,"found":0,"links":0,"children":[]},{"id":32,"depth":1,"title":"","url":"http://www.google.com/intl/en/policies/privacy/","dead":0,"found":0,"links":0,"children":[]},{"id":33,"depth":1,"title":"","url":"http://www.google.com/intl/en/policies/terms/","dead":0,"found":0,"links":0,"children":[]}]};

  testString: any = {"input":{"url":"http://www.google.com","n":2,"type":"rdfs","search":""},"dimensions":{"height":3,"width":62},"results":[{"id":0,"depth":0,"title":"Google","url":"http://www.google.com","dead":0,"found":0,"links":32,"children":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]},{"id":1,"depth":1,"title":"Google Images","url":"http://www.google.com/imghp?hl=en&tab=wi","dead":0,"found":0,"links":31,"children":[33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]},{"id":2,"depth":1,"title":"Google","url":"https://www.google.com/webhp?tab=ww","dead":0,"found":0,"links":0,"children":[]},{"id":3,"depth":1,"title":"  Google Maps  ","url":"http://maps.google.com/maps?hl=en&tab=wl","dead":0,"found":0,"links":0,"children":[]},{"id":4,"depth":1,"title":"Google Play","url":"https://play.google.com/?hl=en&tab=w8","dead":0,"found":0,"links":0,"children":[]},{"id":5,"depth":1,"title":"YouTube","url":"http://www.youtube.com/?gl=US&tab=w1","dead":0,"found":0,"links":0,"children":[]},{"id":6,"depth":1,"title":"Google News","url":"http://news.google.com/nwshp?hl=en&tab=wn","dead":0,"found":0,"links":0,"children":[]},{"id":7,"depth":1,"title":"Gmail","url":"https://mail.google.com/mail/?tab=wm","dead":0,"found":0,"links":0,"children":[]},{"id":8,"depth":1,"title":"Meet Google Drive – One place for all your files","url":"https://drive.google.com/?tab=wo","dead":0,"found":0,"links":0,"children":[]},{"id":9,"depth":1,"title":"Our products | Google","url":"https://www.google.com/intl/en/options/","dead":0,"found":0,"links":0,"children":[]},{"id":10,"depth":1,"title":"Google Calendar","url":"https://www.google.com/calendar?tab=wc","dead":0,"found":0,"links":0,"children":[]},{"id":11,"depth":1,"title":"Google Translate","url":"http://translate.google.com/?hl=en&tab=wT","dead":0,"found":0,"links":0,"children":[]},{"id":12,"depth":1,"title":"Google - Apps","url":"http://www.google.com/mobile/?hl=en&tab=wD","dead":0,"found":0,"links":0,"children":[]},{"id":13,"depth":1,"title":"Google Books","url":"https://books.google.com/bkshp?hl=en&tab=wp","dead":0,"found":0,"links":0,"children":[]},{"id":14,"depth":1,"title":"Google Shopping","url":"http://www.google.com/shopping?hl=en&tab=wf","dead":0,"found":0,"links":0,"children":[]},{"id":15,"depth":1,"title":"Blogger.com - Create a unique and beautiful blog. It’s easy and free.","url":"http://www.blogger.com/?tab=wj","dead":0,"found":0,"links":0,"children":[]},{"id":16,"depth":1,"title":"finance - Google Search","url":"http://www.google.com/finance?tab=we","dead":0,"found":0,"links":0,"children":[]},{"id":17,"depth":1,"title":"Google Photos - All your photos organized and easy to find","url":"https://photos.google.com/?tab=wq&pageId=none","dead":0,"found":0,"links":0,"children":[]},{"id":18,"depth":1,"title":"Google Videos","url":"http://video.google.com/?hl=en&tab=wv","dead":0,"found":0,"links":0,"children":[]},{"id":19,"depth":1,"title":"Google Docs - create and edit documents online, for free.","url":"https://docs.google.com/document/?usp=docs_alc","dead":0,"found":0,"links":0,"children":[]},{"id":20,"depth":1,"title":"Our products | Google","url":"https://www.google.com/intl/en/options/","dead":0,"found":0,"links":0,"children":[]},{"id":21,"depth":1,"title":"Sign in - Google Accounts","url":"https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=http://www.google.com/","dead":0,"found":0,"links":0,"children":[]},{"id":22,"depth":1,"title":"Preferences","url":"http://www.google.com/preferences?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":23,"depth":1,"title":"Preferences","url":"http://www.google.com/preferences?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":24,"depth":1,"title":" Google - Search Customization ","url":"http://www.google.com/history/optout?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":25,"depth":1,"title":"Google Advanced Search","url":"http://www.google.com/advanced_search?hl=en&authuser=0","dead":0,"found":0,"links":0,"children":[]},{"id":26,"depth":1,"title":"Google Translate","url":"http://www.google.com/language_tools?hl=en&authuser=0","dead":0,"found":0,"links":0,"children":[]},{"id":27,"depth":1,"title":"\n      Google Ads - PPC Online Advertising to Reach Your Marketing Goals\n    ","url":"http://www.google.com/intl/en/ads/","dead":0,"found":0,"links":0,"children":[]},{"id":28,"depth":1,"title":"\n      Google Business Solutions - Online Marketing Tools & Apps for Your Business\n    ","url":"http://www.google.com/services/","dead":0,"found":0,"links":0,"children":[]},{"id":29,"depth":1,"title":"Google - Google+","url":"https://plus.google.com/116899029375914044550","dead":0,"found":0,"links":0,"children":[]},{"id":30,"depth":1,"title":"Our latest | Google","url":"http://www.google.com/intl/en/about.html","dead":0,"found":0,"links":0,"children":[]},{"id":31,"depth":1,"title":"","url":"http://www.google.com/intl/en/policies/privacy/","dead":0,"found":0,"links":0,"children":[]},{"id":32,"depth":1,"title":"","url":"http://www.google.com/intl/en/policies/terms/","dead":0,"found":0,"links":0,"children":[]},{"id":33,"depth":2,"title":"Google Images","url":"http://www.google.com/imghp?hl=en&tab=ii","dead":0,"found":0,"links":0,"children":[]},{"id":34,"depth":2,"title":"Google","url":"https://www.google.com/webhp?tab=iw","dead":0,"found":0,"links":0,"children":[]},{"id":35,"depth":2,"title":"  Google Maps  ","url":"http://maps.google.com/maps?hl=en&tab=il","dead":0,"found":0,"links":0,"children":[]},{"id":36,"depth":2,"title":"Google Play","url":"https://play.google.com/?hl=en&tab=i8","dead":0,"found":0,"links":0,"children":[]},{"id":37,"depth":2,"title":"YouTube","url":"http://www.youtube.com/?gl=US&tab=i1","dead":0,"found":0,"links":0,"children":[]},{"id":38,"depth":2,"title":"Google News","url":"http://news.google.com/nwshp?hl=en&tab=in","dead":0,"found":0,"links":0,"children":[]},{"id":39,"depth":2,"title":"Gmail","url":"https://mail.google.com/mail/?tab=im","dead":0,"found":0,"links":0,"children":[]},{"id":40,"depth":2,"title":"Meet Google Drive – One place for all your files","url":"https://drive.google.com/?tab=io","dead":0,"found":0,"links":0,"children":[]},{"id":41,"depth":2,"title":"Our products | Google","url":"https://www.google.com/intl/en/options/","dead":0,"found":0,"links":0,"children":[]},{"id":42,"depth":2,"title":"Google Calendar","url":"https://www.google.com/calendar?tab=ic","dead":0,"found":0,"links":0,"children":[]},{"id":43,"depth":2,"title":"Google Translate","url":"http://translate.google.com/?hl=en&tab=iT","dead":0,"found":0,"links":0,"children":[]},{"id":44,"depth":2,"title":"Google - Apps","url":"http://www.google.com/mobile/?hl=en&tab=iD","dead":0,"found":0,"links":0,"children":[]},{"id":45,"depth":2,"title":"Google Books","url":"https://books.google.com/bkshp?hl=en&tab=ip","dead":0,"found":0,"links":0,"children":[]},{"id":46,"depth":2,"title":"Google Shopping","url":"http://www.google.com/shopping?hl=en&tab=if","dead":0,"found":0,"links":0,"children":[]},{"id":47,"depth":2,"title":"Blogger.com - Create a unique and beautiful blog. It’s easy and free.","url":"http://www.blogger.com/?tab=ij","dead":0,"found":0,"links":0,"children":[]},{"id":48,"depth":2,"title":"finance - Google Search","url":"http://www.google.com/finance?tab=ie","dead":0,"found":0,"links":0,"children":[]},{"id":49,"depth":2,"title":"Google Photos - All your photos organized and easy to find","url":"https://photos.google.com/?tab=iq&pageId=none","dead":0,"found":0,"links":0,"children":[]},{"id":50,"depth":2,"title":"Google Videos","url":"http://video.google.com/?hl=en&tab=iv","dead":0,"found":0,"links":0,"children":[]},{"id":51,"depth":2,"title":"Google Docs - create and edit documents online, for free.","url":"https://docs.google.com/document/?usp=docs_alc","dead":0,"found":0,"links":0,"children":[]},{"id":52,"depth":2,"title":"Our products | Google","url":"https://www.google.com/intl/en/options/","dead":0,"found":0,"links":0,"children":[]},{"id":53,"depth":2,"title":"Sign in - Google Accounts","url":"https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=http://www.google.com/imghp%3Fhl%3Den%26tab%3Dwi","dead":0,"found":0,"links":0,"children":[]},{"id":54,"depth":2,"title":"Preferences","url":"http://www.google.com/preferences?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":55,"depth":2,"title":"Preferences","url":"http://www.google.com/preferences?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":56,"depth":2,"title":" Google - Search Customization ","url":"http://www.google.com/history/optout?hl=en","dead":0,"found":0,"links":0,"children":[]},{"id":57,"depth":2,"title":"Google Advanced Image Search","url":"http://www.google.com/advanced_image_search?hl=en&authuser=0","dead":0,"found":0,"links":0,"children":[]},{"id":58,"depth":2,"title":"\n      Google Ads - PPC Online Advertising to Reach Your Marketing Goals\n    ","url":"http://www.google.com/intl/en/ads/","dead":0,"found":0,"links":0,"children":[]},{"id":59,"depth":2,"title":"\n      Google Business Solutions - Online Marketing Tools & Apps for Your Business\n    ","url":"http://www.google.com/services/","dead":0,"found":0,"links":0,"children":[]},{"id":60,"depth":2,"title":"Google - Google+","url":"https://plus.google.com/116899029375914044550","dead":0,"found":0,"links":0,"children":[]},{"id":61,"depth":2,"title":"Our latest | Google","url":"http://www.google.com/intl/en/about.html","dead":0,"found":0,"links":0,"children":[]},{"id":62,"depth":2,"title":"","url":"http://www.google.com/intl/en/policies/privacy/","dead":0,"found":0,"links":0,"children":[]},{"id":63,"depth":2,"title":"","url":"http://www.google.com/intl/en/policies/terms/","dead":0,"found":0,"links":0,"children":[]}]};

  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    // this.searchService.data.subscribe((success) => {this.data = JSON.parse(success)});
    this.data = this.testString;
    this.buildPage(this.data);
  }



  buildPage(data: any) {
    // local vars that store blank (non-dynamic) divs
    var gDiv = $( ".gridNode" );
    var lDiv = $( ".lineGridNode" );

    // recursive helper function that loops through the data boject and places nodes
    var buildHelper = function(data: any, idx: number) {
      for(var i: number=0; i < data.results[idx].links; i++) {
        // var for getting the correct grid depth for a given node
        var nodePos = Math.floor((data.dimensions.width+2) * (data.results[data.results[idx].children[i]].depth * 2) + 1);

        if(i > 0) {
          for(var j: number=i-1; j >= 0; j--) {
            if(data.results[data.results[idx].children[j]].links > 0) {
              nodePos += data.results[data.results[idx].children[j]].links - 1;
              for(var k: number=data.results[data.results[idx].children[j]].links; k > 1; k--) {
                if(k === data.results[data.results[idx].children[j]].links) {
                  $("#node" + String((nodePos + i) - (data.dimensions.width+1) - k - 1) + " .topRight").addClass("borderBottom");
                  $("#node" + String((nodePos + i) - (data.dimensions.width+1) - k - 1) + " .bottomRight").addClass("borderTop");
                }
                $("#node" + String((nodePos + i) - (data.dimensions.width+1) - k) + " .topRight").addClass("borderBottom");
                $("#node" + String((nodePos + i) - (data.dimensions.width+1) - k) + " .topLeft").addClass("borderBottom");
                $("#node" + String((nodePos + i) - (data.dimensions.width+1) - k) + " .bottomRight").addClass("borderTop");
                $("#node" + String((nodePos + i) - (data.dimensions.width+1) - k) + " .bottomLeft").addClass("borderTop");
              }
            }
          }

          $("#node" + String((nodePos + i) - (data.dimensions.width+2)) + " .topLeft").addClass("borderBottom");
          $("#node" + String((nodePos + i) - (data.dimensions.width+2)) + " .bottomRight").addClass("borderLeft");
          $("#node" + String((nodePos + i) - (data.dimensions.width+2)) + " .bottomLeft").addClass("borderTop borderRight");
          $("#node" + String((nodePos + i) - (data.dimensions.width+2) - 1) + " .topRight").addClass("borderBottom");
          $("#node" + String((nodePos + i) - (data.dimensions.width+2) - 1) + " .bottomRight").addClass("borderTop");

        } else {
          $("#node" + String(nodePos - (data.dimensions.width+2)) + " .topRight").addClass("borderLeft");
          $("#node" + String(nodePos - (data.dimensions.width+2)) + " .topLeft").addClass("borderRight");
          $("#node" + String(nodePos - (data.dimensions.width+2)) + " .bottomRight").addClass("borderLeft");
          $("#node" + String(nodePos - (data.dimensions.width+2)) + " .bottomLeft").addClass("borderRight");
        }


        // create the node by adding a class
        if(data.results[data.results[idx].children[i]].found) {
          $("#node" + String(nodePos + i)).addClass("foundNode");
        } else if(data.results[data.results[idx].children[i]].dead) {
          $("#node" + String(nodePos + i)).addClass("deadNode");
        } else {
          $("#node" + String(nodePos + i)).addClass("normalNode");
        }

        // set title
        if(data.results[data.results[idx].children[i]].title === ""){
          $("#node" + String(nodePos + i)).append(
            "<p>No Title</p>"
          );
        } else {
          $("#node" + String(nodePos + i)).append(
            "<p>"+ data.results[data.results[idx].children[i]].title + "</p>"
          );
        }

        // set url
        $("#node" + String(nodePos + i)).append(
          "<p>"+ data.results[data.results[idx].children[i]].url + "</p>"
        );

        // set number of links
        if((data.input.type === ("rdfs" || "tdfs")) && (i !== 0)){
          $("#node" + String(nodePos + i)).append(
            "<p>links: N/A</p>"
          );
        } else if ((data.input.type === "bfs") && (data.results[data.results[idx].children[i]].depth + 1 === data.dimensions.height)) {
          $("#node" + String(nodePos + i)).append(
            "<p>links: N/A</p>"
          );
        } else {
          $("#node" + String(nodePos + i)).append(
            "<p>links: "+ data.results[data.results[idx].children[i]].links + "</p>"
          );
        }

        // recursivly build next level of tree
        if(data.results[data.results[idx].children[i]].links !== 0) {
          buildHelper(data, data.results[idx].children[i]);
        }
      }
    }

    // clone the blank div into the viewWindow to make the grid
    for(var i: number=0; i < (data.dimensions.height*2)*(data.dimensions.width+2); i++) {
      $(gDiv).clone().appendTo(".gridDisplay").removeClass("hidden").attr("id", "node" + String(i));
    }

    for(var i: number=1; i <= (data.dimensions.height * 2); i += 2) {
      for(var j: number=0; j < (data.dimensions.width+2); j++) {
        var currentNode: string = String(Math.floor(((data.dimensions.width+2) * i) + j));
        $("#node" + currentNode).removeClass("gridNode").addClass("lineGrid");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("topLeft");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("topRight");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("bottomLeft");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("bottomRight");
      }
    }

    //style the topNode
    $("#node1").addClass("topNode");

    // set the top nodes title
    if(data.results[0].title === ""){
      $("#node1").append(
        "<p>No Title</p>"
      );
    } else {
      $("#node1").append(
        "<p>"+ data.results[0].title + "</p>"
      );
    }

    // set the top nodes url and number of links
    $("#node1").append(
      "<p>"+ data.results[0].url + "</p>" +
      "<p>links: "+ data.results[0].links + "</p>"
    );

    // call the helper function to build the rest of the tree
    buildHelper(data, 0);

    // temp calculate width
    var tempWidth: number = 1;
    for(var i: number=0; i < data.results.length; i++) {
      if(data.results[i].links > 0) {
        tempWidth += (data.results[i].links - 1);
      }
    }

    // set grid dimensions
    $( ".gridDisplay" ).css("grid-template-rows" ,"repeat(" + String((data.dimensions.height*2)+1) + ", 150px 75px)");
    // $( ".gridDisplay" ).css("grid-template-columns","repeat(" + String(data.dimensions.width+2) + ", 300px)");

    $( ".gridDisplay" ).css("grid-template-columns","repeat(" + String(tempWidth + 2) + ", 300px)");
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


// for(var k: number=data.results[data.results[idx].children[j]].links - 1; k > 0; k--) {
//   $("#node" + String(nodePos - (data.dimensions.width+1) - k) + " .topRight").addClass("borderBottom");
//   $("#node" + String(nodePos - (data.dimensions.width+1) - k) + " .topLeft").addClass("borderBottom");
//   $("#node" + String(nodePos - (data.dimensions.width+1) - k) + " .bottomRight").addClass("borderTop");
//   $("#node" + String(nodePos - (data.dimensions.width+1) - k) + " .bottomLeft").addClass("borderTop");
// }
