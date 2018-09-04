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
  // testString: any = ;

  // members used to fill input display
  inputURL: string;
  inputN: number;
  inputType: string;
  inputSearch: string;

  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    // used to insert jsons for testing
    // this.data = this.testString;

    this.searchService.data.subscribe((success) => {this.data = JSON.parse(success)});

    // load the vars used for displaying the user input
    this.loadInputVars(this.data);

    // build the tree
    this.buildPage(this.data);

    // set the zoom based on screen width
    this.setZoom();

    // call the jquery code so that its is available
    this.hover();
    this.grabDrag();
  }

  // build the graph of links
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
          } else {      //if this is rdfs no need to adjust position from left
            $("#node" + String((nodePos + i) - (data.dimensions.width) - 1) + " .topRight").addClass("borderBottom");
            $("#node" + String((nodePos + i) - (data.dimensions.width) - 1) + " .bottomRight").addClass("borderTop");
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

  // zoom out for smaller screens
  setZoom(){
    if($(window).width() < 1000){
      $(".gridDisplay").removeClass("noZoom").addClass("out3");
      $(".viewWindow").scrollLeft(250);

      $(".viewWindow").scrollTop(95);

      $(".container").css("width", String(Math.floor((300 * this.data.dimensions.width) * 0.5)) + "px");
      $(".container").css("height", String(Math.floor((225 * this.data.dimensions.height) * 0.5)) + "px");
    }
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
  }

  // handles jump left button
  jumpLeft() {
    // var leftScroll = $(".viewWindow").scrollLeft(0);
    $(".viewWindow").animate({scrollLeft: 300}, 800);
  }

  // handles jump right button
  jumpCenter() {
    let center = $(".container").width()/2;
    $(".viewWindow").animate({scrollLeft: center}, 800);
  }

  // handles jump right button
  jumpRight() {
    let right = ($(".container").width());
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
