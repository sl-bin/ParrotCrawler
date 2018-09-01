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

  // used to hold data returned to servce from POST/SSE
  data: ParrotReturn;

  // used to insert jsons for testing
  testString: any = {
    "input": {
      "url": "http://www.google.com",
      "n": 2,
      "type": "rdfs",
      "search": ""
    },
    "dimensions": {
      "height": 3,
      "width": 128
    },
    "results": [
      {
        "id": 0,
        "depth": 0,
        "title": "Google",
        "url": "http://www.google.com",
        "dead": 0,
        "found": 0,
        "links": 32,
        "children": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32
        ]
      },
      {
        "id": 1,
        "depth": 1,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tab=wi",
        "dead": 0,
        "found": 0,
        "links": 31,
        "children": [
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63
        ]
      },
      {
        "id": 2,
        "depth": 1,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=ww",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 3,
        "depth": 1,
        "title": "  Google Maps  ",
        "url": "http://maps.google.com/maps?hl=en&tab=wl",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 4,
        "depth": 1,
        "title": "Google Play",
        "url": "https://play.google.com/?hl=en&tab=w8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 5,
        "depth": 1,
        "title": "YouTube",
        "url": "http://www.youtube.com/?gl=US&tab=w1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 6,
        "depth": 1,
        "title": "Google News",
        "url": "http://news.google.com/nwshp?hl=en&tab=wn",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 7,
        "depth": 1,
        "title": "Gmail",
        "url": "https://mail.google.com/mail/?tab=wm",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 8,
        "depth": 1,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://drive.google.com/?tab=wo",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 9,
        "depth": 1,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/options/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 10,
        "depth": 1,
        "title": "Google Calendar",
        "url": "https://www.google.com/calendar?tab=wc",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 11,
        "depth": 1,
        "title": "Google Translate",
        "url": "http://translate.google.com/?hl=en&tab=wT",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 12,
        "depth": 1,
        "title": "Google - Apps",
        "url": "http://www.google.com/mobile/?hl=en&tab=wD",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 13,
        "depth": 1,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=wp",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 14,
        "depth": 1,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=wf",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 15,
        "depth": 1,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "http://www.blogger.com/?tab=wj",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 16,
        "depth": 1,
        "title": "finance - Google Search",
        "url": "http://www.google.com/finance?tab=we",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 17,
        "depth": 1,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://photos.google.com/?tab=wq&pageId=none",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 18,
        "depth": 1,
        "title": "Google Videos",
        "url": "http://video.google.com/?hl=en&tab=wv",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 19,
        "depth": 1,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://docs.google.com/document/?usp=docs_alc",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 20,
        "depth": 1,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/options/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 21,
        "depth": 1,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=http://www.google.com/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 22,
        "depth": 1,
        "title": "Preferences",
        "url": "http://www.google.com/preferences?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 23,
        "depth": 1,
        "title": "Preferences",
        "url": "http://www.google.com/preferences?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 24,
        "depth": 1,
        "title": " Google - Search Customization ",
        "url": "http://www.google.com/history/optout?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 25,
        "depth": 1,
        "title": "Google Advanced Search",
        "url": "http://www.google.com/advanced_search?hl=en&authuser=0",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 26,
        "depth": 1,
        "title": "Google Translate",
        "url": "http://www.google.com/language_tools?hl=en&authuser=0",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 27,
        "depth": 1,
        "title": "\n      Google Ads - PPC Online Advertising to Reach Your Marketing Goals\n    ",
        "url": "http://www.google.com/intl/en/ads/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 28,
        "depth": 1,
        "title": "\n      Google Business Solutions - Online Marketing Tools & Apps for Your Business\n    ",
        "url": "http://www.google.com/services/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 29,
        "depth": 1,
        "title": "Google - Google+",
        "url": "https://plus.google.com/116899029375914044550",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 30,
        "depth": 1,
        "title": "Our latest | Google",
        "url": "http://www.google.com/intl/en/about.html",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 31,
        "depth": 1,
        "title": "",
        "url": "http://www.google.com/intl/en/policies/privacy/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 32,
        "depth": 1,
        "title": "",
        "url": "http://www.google.com/intl/en/policies/terms/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 33,
        "depth": 2,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tab=ii",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 34,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=iw",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 35,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "http://maps.google.com/maps?hl=en&tab=il",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 36,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/?hl=en&tab=i8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 37,
        "depth": 2,
        "title": "YouTube",
        "url": "http://www.youtube.com/?gl=US&tab=i1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 38,
        "depth": 2,
        "title": "Google News",
        "url": "http://news.google.com/nwshp?hl=en&tab=in",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 39,
        "depth": 2,
        "title": "Gmail",
        "url": "https://mail.google.com/mail/?tab=im",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 40,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://drive.google.com/?tab=io",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 41,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/options/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 42,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://www.google.com/calendar?tab=ic",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 43,
        "depth": 2,
        "title": "Google Translate",
        "url": "http://translate.google.com/?hl=en&tab=iT",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 44,
        "depth": 2,
        "title": "Google - Apps",
        "url": "http://www.google.com/mobile/?hl=en&tab=iD",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 45,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=ip",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 46,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=if",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 47,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "http://www.blogger.com/?tab=ij",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 48,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "http://www.google.com/finance?tab=ie",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 49,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://photos.google.com/?tab=iq&pageId=none",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 50,
        "depth": 2,
        "title": "Google Videos",
        "url": "http://video.google.com/?hl=en&tab=iv",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 51,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://docs.google.com/document/?usp=docs_alc",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 52,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/options/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 53,
        "depth": 2,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=http://www.google.com/imghp%3Fhl%3Den%26tab%3Dwi",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 54,
        "depth": 2,
        "title": "Preferences",
        "url": "http://www.google.com/preferences?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 55,
        "depth": 2,
        "title": "Preferences",
        "url": "http://www.google.com/preferences?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 56,
        "depth": 2,
        "title": " Google - Search Customization ",
        "url": "http://www.google.com/history/optout?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 57,
        "depth": 2,
        "title": "Google Advanced Image Search",
        "url": "http://www.google.com/advanced_image_search?hl=en&authuser=0",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 58,
        "depth": 2,
        "title": "\n      Google Ads - PPC Online Advertising to Reach Your Marketing Goals\n    ",
        "url": "http://www.google.com/intl/en/ads/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 59,
        "depth": 2,
        "title": "\n      Google Business Solutions - Online Marketing Tools & Apps for Your Business\n    ",
        "url": "http://www.google.com/services/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 60,
        "depth": 2,
        "title": "Google - Google+",
        "url": "https://plus.google.com/116899029375914044550",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 61,
        "depth": 2,
        "title": "Our latest | Google",
        "url": "http://www.google.com/intl/en/about.html",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 62,
        "depth": 2,
        "title": "",
        "url": "http://www.google.com/intl/en/policies/privacy/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 63,
        "depth": 2,
        "title": "",
        "url": "http://www.google.com/intl/en/policies/terms/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      }
    ]
  }
;

  // members used to fill input display
  inputURL: string;
  inputN: number;
  inputType: string;
  inputSearch: string;

  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    // used to insert jsons for testing
    this.data = this.testString;

    // this.searchService.data.subscribe((success) => {this.data = JSON.parse(success)});

    // load the vars used for displaying the user input
    this.loadInputVars(this.data);

    // build the tree
    this.buildPage(this.data);

    // call the jquery code so that its is available
    this.hover();
    this.grabDrag();
  }

  buildPage(data: any) {
    // local vars that store blank (non-dynamic) divs
    let gDiv = $( ".gridNode" );
    let lDiv = $( ".lineGridNode" );
    let spacer = $( ".spacer" );

    // local vars for setting grid deminsions
    let rowCount: string = "";
    let colCount: string = "";

    // recursive helper function that loops through the data boject and places nodes
    let buildHelper = function(data: any, idx: number, offset: number) {
      for(let i: number=0; i < data.results[idx].links; i++) {
        // var for getting the correct grid depth for a given node
        let nodePos = Math.floor(((data.dimensions.width) * (data.results[data.results[idx].children[i]].depth * 2)));
        // var for counting gridNodes to draw lines in (also helps offset)
        let count: number=0;

        // add offset from parrent node
        nodePos += offset;



        // if this is not the first element in this loop of the recursion compare
        // at left siblings and find corrent spacing for this node
        if(i > 0) {

          if(data.input.type === "bfs") {
            // this is an iteritive way of looking down into the lower levels and counting how
            // many nodes there should be (on all levels) between the left edge and this node
            // How this actually works is by going down until a node with no links is found and then
            // adding one to the count. In this way the number of nodes needed for spacing can be counted
            // NOTE: this could be converted to a recursive function and I might do that later.
            // currently it is n^5 which is aweful and converting it to a recursive version of the same
            // sytle of counting loops would be even slower due to function calls, so I am still debating
            // if I should make this recursive
              for(let j: number=0; j < i; j++) {
                if(data.results[data.results[idx].children[j]].links > 0) {
                  for(let k: number=0; k < data.results[data.results[idx].children[j]].links; k++) {
                    if(data.results[data.results[data.results[idx].children[j]].children[k]].links > 0) {
                      for(let l: number=0; l < data.results[data.results[data.results[idx].children[j]].children[k]].links; l++){
                        if(data.results[data.results[data.results[data.results[idx].children[j]].children[k]].children[l]].links > 0) {
                          for(let m: number=0; m < data.results[data.results[data.results[data.results[idx].children[j]].children[k]].children[l]].links; m++){
                            count++;
                          }
                        } else {
                          count++;
                        }
                      }
                    } else {
                      count++;
                    }
                  }
                } else {
                  count++;
                }
              }


              // adjust for parent links
              nodePos += count - i;

              // draw the lines between the parent node and this node
              for(let j: number=count-1; j > 0; j--) {
                // connects parent node (works for highest levels)
                if(j === count-1){
                  $("#node" + String((nodePos + i) - (data.dimensions.width) - j - 1) + " .topRight").addClass("borderBottom");
                  $("#node" + String((nodePos + i) - (data.dimensions.width) - j - 1) + " .bottomRight").addClass("borderTop");
                }

                // adds a horizontal line to the nodes it is looping over
                $("#node" + String((nodePos + i) - (data.dimensions.width) - j) + " .topRight").addClass("borderBottom");
                $("#node" + String((nodePos + i) - (data.dimensions.width) - j) + " .topLeft").addClass("borderBottom");
                $("#node" + String((nodePos + i) - (data.dimensions.width) - j) + " .bottomRight").addClass("borderTop");
                $("#node" + String((nodePos + i) - (data.dimensions.width) - j) + " .bottomLeft").addClass("borderTop");
              }
          } else {
            $("#node" + String((nodePos + i) - (data.dimensions.width) - j - 1) + " .topRight").addClass("borderBottom");
            $("#node" + String((nodePos + i) - (data.dimensions.width) - j - 1) + " .bottomRight").addClass("borderTop");
          }

          // adds a connecting lines from drawn line down to thi node
          $("#node" + String((nodePos + i) - (data.dimensions.width)) + " .topLeft").addClass("borderBottom");
          $("#node" + String((nodePos + i) - (data.dimensions.width)) + " .bottomRight").addClass("borderLeft");
          $("#node" + String((nodePos + i) - (data.dimensions.width)) + " .bottomLeft").addClass("borderTop borderRight");

          // connects parent node (works for lowest levels)
          $("#node" + String((nodePos + i) - (data.dimensions.width) - 1) + " .topRight").addClass("borderBottom");
          $("#node" + String((nodePos + i) - (data.dimensions.width) - 1) + " .bottomRight").addClass("borderTop");
        } else {
          // draws the vertical line from the parent node to the first child
          $("#node" + String(nodePos - (data.dimensions.width)) + " .topRight").addClass("borderLeft");
          $("#node" + String(nodePos - (data.dimensions.width)) + " .topLeft").addClass("borderRight");
          $("#node" + String(nodePos - (data.dimensions.width)) + " .bottomRight").addClass("borderLeft");
          $("#node" + String(nodePos - (data.dimensions.width)) + " .bottomLeft").addClass("borderRight");
        }

        // create the node by adding a class and a link for the url and title
        if(data.results[data.results[idx].children[i]].dead) {
          $("#node" + String(nodePos + i)).addClass("deadNode");
          $("#node" + String(nodePos + i) + " a").removeClass("hidden").addClass("static");
        } else if(data.results[data.results[idx].children[i]].found) {
          $("#node" + String(nodePos + i)).addClass("foundNode")
          if(data.results[data.results[idx].children[i]].url[0] === 'h' &&
             data.results[data.results[idx].children[i]].url[1] === 't' &&
             data.results[data.results[idx].children[i]].url[2] === 't' &&
             data.results[data.results[idx].children[i]].url[3] === 'p') {
               $("#node" + String(nodePos + i) + " a").removeClass("hidden").attr("href", data.results[data.results[idx].children[i]].url);
             } else {
               $("#node" + String(nodePos + i) + " a").removeClass("hidden").addClass("static");
             }
        } else {
          $("#node" + String(nodePos + i)).addClass("normalNode")
          if(data.results[data.results[idx].children[i]].url[0] === 'h' &&
             data.results[data.results[idx].children[i]].url[1] === 't' &&
             data.results[data.results[idx].children[i]].url[2] === 't' &&
             data.results[data.results[idx].children[i]].url[3] === 'p') {
               $("#node" + String(nodePos + i) + " a").removeClass("hidden").attr("href", data.results[data.results[idx].children[i]].url);
             } else {
               $("#node" + String(nodePos + i) + " a").removeClass("hidden").addClass("static");;
             }
        }

        // set title
        if(data.results[data.results[idx].children[i]].title === ""){
          $("#node" + String(nodePos + i) + " a").append(
            "<p>No Title</p>"
          );
        } else {
          if(data.results[data.results[idx].children[i]].title.length > 55) {
            $("#node" + String(nodePos + i) + " a").append(
              "<p>"+ data.results[data.results[idx].children[i]].title.substring(0,54) + "...</p>"
            );
          } else {
            $("#node" + String(nodePos + i) + " a").append(
              "<p>"+ data.results[data.results[idx].children[i]].title + "</p>"
            );
          }
        }

        // set url
        if(data.results[data.results[idx].children[i]].url.length > 55) {
          $("#node" + String(nodePos + i) + " a").append(
            "<p>"+ data.results[data.results[idx].children[i]].url.substring(0,54) + "...</p>"
          );
        } else {
          $("#node" + String(nodePos + i) + " a").append(
            "<p>"+ data.results[data.results[idx].children[i]].url + "</p>"
          );
        }


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
          buildHelper(data, data.results[idx].children[i], (nodePos - (((data.dimensions.width) * (data.results[data.results[idx].children[i]].depth * 2)))) + i);
        }
      }
    }

    // clone the blank div into the viewWindow to make the grid
    for(let i: number=0; i < (data.dimensions.height*2)*(data.dimensions.width); i++) {
      $(gDiv).clone().appendTo(".gridDisplay").removeClass("hidden").attr("id", "node" + String(i));
      // used for testing. Add to above statement to see node numbers in rendered page
      // .text("node" + String(i))
    }

    // add the subgrid to every other row of gridNodes
    // used for drawing lines
    for(let i: number=1; i <= (data.dimensions.height * 2); i += 2) {
      for(let j: number=0; j < (data.dimensions.width); j++) {
        let currentNode: string = String(Math.floor(((data.dimensions.width) * i) + j));
        $("#node" + currentNode).removeClass("gridNode").addClass("lineGrid");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("topLeft");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("topRight");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("bottomLeft");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("bottomRight");
      }
    }

    //style the topNode and add link for url and title



    if(data.results[0].dead) {
      $("#node0").addClass("topDead");
      $("#node0 a").removeClass("hidden");
    } else {
      if(data.results[0].found){
        $("#node0").addClass("topFound");
      } else {
        $("#node0").addClass("topNode");
      }
      $("#node0 a").removeClass("hidden").attr("href", data.results[0].url);
    }


    // set the top nodes title
    if(data.results[0].title === ""){
      $("#node0 a").append(
        "<p>No Title</p>"
      );
    } else {
      if(data.results[0].title.length > 55) {
        $("#node0 a").append(
            "<p>"+ data.results[0].title.substring(0,54) + "...</p>"
          );
      } else {
        $("#node0 a").append(
          "<p>" + data.results[0].title + "</p>"
        );
      }


    }

    // set the top nodes url
    if(data.results[0].title.length > 55) {
      $("#node0 a").append(
          "<p>"+ data.results[0].url.substring(0,54) + "...</p>"
        );
    } else {
      $("#node0 a").append(
        "<p>" + data.results[0].url + "</p>"
      );
    }

    // set number of links
    $("#node0").append(
      "<p>links: " + data.results[0].links + "</p>"
    );

    // call the helper function to build the rest of the tree
    buildHelper(data, 0, 0);


    // this sets the grid templates
    // this method is used instead of repeat()
    for(let i: number=1; i <= data.dimensions.height; i++) {
      rowCount += "150px 75px ";
    }
    for(let i: number=1; i <= data.dimensions.width; i++) {
      colCount += "300px ";
    }

    // set grid dimensions
    $( ".gridDisplay" ).css("grid-template-rows", rowCount);
    $( ".gridDisplay" ).css("grid-template-columns", colCount);
    $( ".container" ).css( "width", String(300 * data.dimensions.width) + "px");
    $( ".container" ).css( "hieght", String(225 * data.dimensions.height) + "px");
  }



  // handles hovering over text
  hover() {
    $( ".normalNode, .deadNode, .foundNode" ).hover( function() {
      switch($(".gridDisplay").attr("class")) {
        case "gridDisplay out1": $( this ).addClass("inNode4 topZ");
        break;
        case "gridDisplay out2": $( this ).addClass("inNode3 topZ");
        break;
        case "gridDisplay out3": $( this ).addClass("inNode2 topZ");
        break;
        case "gridDisplay noZoom": $( this ).addClass("inNode1 topZ");
        break;
        case "gridDisplay in1": $( this ).addClass("inNode1 topZ");
        break;
        case "gridDisplay in2":
        break;
      }
    }, function() {
      $( this ).removeClass("inNode1");
      $( this ).removeClass("inNode2");
      $( this ).removeClass("inNode3");
      $( this ).removeClass("inNode4");
      $( this ).removeClass("topZ");
    })
  }

  // grab and drag
  // adapted form https://codepen.io/JTParrett/pen/uzGvy
  grabDrag() {
    $(function(){
      let curDown = false,
          curYPos = 0,
          curXPos = 0;
      $(".container").mousemove(function(vW){
        if(curDown === true){
         $(".viewWindow").scrollTop($(".viewWindow").scrollTop() + ((curYPos - vW.pageY)/16));
         $(".viewWindow").scrollLeft($(".viewWindow").scrollLeft() + ((curXPos - vW.pageX)/16));
        }
      });

      $(".viewWindow").mousedown(function(vW){
        curDown = true;
        curYPos = vW.pageY;
        curXPos = vW.pageX;
      });

      $(".viewWindow").mouseup(function(){
        curDown = false;
      });
    })
  }

  // handles zoom in button
  zoomIn() {
    switch($(".gridDisplay").attr("class")) {
      case "gridDisplay out1": $(".gridDisplay").removeClass("out1").addClass("out2");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 0.25)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 0.25)) + "px");
      break;
      case "gridDisplay out2": $(".gridDisplay").removeClass("out2").addClass("out3");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 0.5)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 0.5)) + "px");
      break;
      case "gridDisplay out3": $(".gridDisplay").removeClass("out3").addClass("noZoom");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 1)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 1)) + "px");
      break;
      case "gridDisplay noZoom": $(".gridDisplay").removeClass("noZoom").addClass("in1");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 1.5)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 1.5)) + "px");
      break;
      case "gridDisplay in1": $(".gridDisplay").removeClass("in1").addClass("in2");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 2)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 2)) + "px");
      break;
      case "gridDisplay in2":
      break;
    }

    console.log($(".container").css("width"));
  }

  // handles zoom out button
  zoomOut() {
    switch($(".gridDisplay").attr("class")) {
      case "gridDisplay out1":
      break;
      case "gridDisplay out2": $(".gridDisplay").removeClass("out2").addClass("out1");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 0.12)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 0.12)) + "px");
      break;
      case "gridDisplay out3": $(".gridDisplay").removeClass("out3").addClass("out2");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 0.25)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 0.25)) + "px");
      break;
      case "gridDisplay noZoom": $(".gridDisplay").removeClass("noZoom").addClass("out3");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 0.5)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 0.5)) + "px");
      break;
      case "gridDisplay in1": $(".gridDisplay").removeClass("in1").addClass("noZoom");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 1)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 1)) + "px");
      break;
      case "gridDisplay in2": $(".gridDisplay").removeClass("in2").addClass("in1");
        $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 1.5)) + "px");
        $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 1.5)) + "px");
      break;
    }

    console.log($(".container").css("width"));
  }

  // handles jump left button
  jumpLeft() {
    // var leftScroll = $(".viewWindow").scrollLeft(0);
    $(".viewWindow").animate({scrollLeft: 0}, 800);
  }

  // handles jump right button
  jumpCenter() {
    let center = $(".container").width()/2;
    $(".viewWindow").animate({scrollLeft: center}, 800);
  }

  // handles jump right button
  jumpRight() {
    let right = $(".container").width();
    $(".viewWindow").animate({scrollLeft: right}, 800);
  }

  loadInputVars(data: any) {
    // load the vars used for displaying the user input
    // parse the url
    if(data.input.url.length > 40) {
      this.inputURL = data.input.url.substring(0,39) + "...";
    } else {
      this.inputURL = data.input.url;
    }

    // parse n (no parsing needed)
    this.inputN = data.input.n;

    // parse type (no parsing needed)
    this.inputType = data.input.type;

    // parse the search phrase
    if(data.input.search.length > 40) {
      this.inputSearch = data.input.search.substring(0,39) + "...";
    } else {
      this.inputSearch = data.input.search;
    }
  }
}
