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

  // used to insert jsons for testing
  // testString: any = ;

  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    // used to insert jsons for testing
    // this.data = this.testString;

    this.searchService.data.subscribe((success) => {this.data = JSON.parse(success)});
    this.buildPage(this.data);
    this.hover();
  }

  buildPage(data: any) {
    // local vars that store blank (non-dynamic) divs
    var gDiv = $( ".gridNode" );
    var lDiv = $( ".lineGridNode" );

    // recursive helper function that loops through the data boject and places nodes
    var buildHelper = function(data: any, idx: number, offset: number) {
      for(var i: number=0; i < data.results[idx].links; i++) {
        // var for getting the correct grid depth for a given node
        var nodePos = Math.floor(((data.dimensions.width+2) * (data.results[data.results[idx].children[i]].depth * 2)) + 1);
        // var for counting gridNodes to draw lines in (also helps offset)
        var count: number=0;

        // add offset from parrent node
        nodePos += offset;

        // if this is not the first element in this loop of the recursion compare
        // at left siblings and find corrent spacing for this node
        if(i > 0){

        // this is an iteritive way of looking down into the lower levels and counting how
        // many nodes there should be (on all levels) between the left edge and this node
        // How this actually works is by going down until a node with no links is found and then
        // adding one to the count. In this way the number of nodes needed for spacing can be counted
        // NOTE: this could be converted to a recursive function and I might do that later.
        // currently it is n^5 which is aweful and converting it to a recursive version of the same
        // sytle of counting loops would be even slower due to function calls, so I am still debating
        // if I should make this recursive
          for(var j: number=0; j < i; j++) {
            if(data.results[data.results[idx].children[j]].links > 0) {
              for(var k: number=0; k < data.results[data.results[idx].children[j]].links; k++) {
                if(data.results[data.results[data.results[idx].children[j]].children[k]].links > 0) {
                  for(var l: number=0; l < data.results[data.results[data.results[idx].children[j]].children[k]].links; l++){
                    if(data.results[data.results[data.results[data.results[idx].children[j]].children[k]].children[l]].links > 0) {
                      for(var m: number=0; m < data.results[data.results[data.results[data.results[idx].children[j]].children[k]].children[l]].links; m++){
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
          for(var j: number=count; j > 1; j--) {
            // connects parent node (works for highest levels)
            if(j === count){
              $("#node" + String((nodePos + i) - (data.dimensions.width+1) - j - 1) + " .topRight").addClass("borderBottom");
              $("#node" + String((nodePos + i) - (data.dimensions.width+1) - j - 1) + " .bottomRight").addClass("borderTop");
            }

            // adds a horizontal line to the nodes it is looping over
            $("#node" + String((nodePos + i) - (data.dimensions.width+1) - j) + " .topRight").addClass("borderBottom");
            $("#node" + String((nodePos + i) - (data.dimensions.width+1) - j) + " .topLeft").addClass("borderBottom");
            $("#node" + String((nodePos + i) - (data.dimensions.width+1) - j) + " .bottomRight").addClass("borderTop");
            $("#node" + String((nodePos + i) - (data.dimensions.width+1) - j) + " .bottomLeft").addClass("borderTop");
          }

          // adds a connecting lines from drawn line down to thi node
          $("#node" + String((nodePos + i) - (data.dimensions.width+2)) + " .topLeft").addClass("borderBottom");
          $("#node" + String((nodePos + i) - (data.dimensions.width+2)) + " .bottomRight").addClass("borderLeft");
          $("#node" + String((nodePos + i) - (data.dimensions.width+2)) + " .bottomLeft").addClass("borderTop borderRight");

          // connects parent node (works for lowest levels)
          $("#node" + String((nodePos + i) - (data.dimensions.width+2) - 1) + " .topRight").addClass("borderBottom");
          $("#node" + String((nodePos + i) - (data.dimensions.width+2) - 1) + " .bottomRight").addClass("borderTop");
        } else {
          // draws the vertical line from the parent node to the first child
          $("#node" + String(nodePos - (data.dimensions.width+2)) + " .topRight").addClass("borderLeft");
          $("#node" + String(nodePos - (data.dimensions.width+2)) + " .topLeft").addClass("borderRight");
          $("#node" + String(nodePos - (data.dimensions.width+2)) + " .bottomRight").addClass("borderLeft");
          $("#node" + String(nodePos - (data.dimensions.width+2)) + " .bottomLeft").addClass("borderRight");
        }

        // create the node by adding a class and a link for the url and title
        if(data.results[data.results[idx].children[i]].dead) {
          $("#node" + String(nodePos + i)).addClass("deadNode")
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
          $("#node" + String(nodePos + i) + " a").append(
            "<p>"+ data.results[data.results[idx].children[i]].title + "</p>"
          );
        }

        // set url
        $("#node" + String(nodePos + i) + " a").append(
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
          buildHelper(data, data.results[idx].children[i], (nodePos - (((data.dimensions.width+2) * (data.results[data.results[idx].children[i]].depth * 2)) + 1)) + i);
        }
      }
    }

    // clone the blank div into the viewWindow to make the grid
    for(var i: number=0; i < (data.dimensions.height*2)*(data.dimensions.width+2); i++) {
      $(gDiv).clone().appendTo(".gridDisplay").removeClass("hidden").attr("id", "node" + String(i));
      // used for testing. Add to above statement to see node numbers in rendered page
      // .text("node" + String(i))
    }

    // add the subgrid to every other row of gridNodes
    // used for drawing lines
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

    //style the topNode and add link for url and title
    $("#node1").addClass("topNode");
    if(data.results[0].found){
      $("#node1").addClass("topFound");
    }
    $("#node1 a").removeClass("hidden").attr("href", data.results[0].url);

    // set the top nodes title
    if(data.results[0].title === ""){
      $("#node1 a").append(
        "<p>No Title</p>"
      );
    } else {
      $("#node1 a").append(
        "<p>" + data.results[0].title + "</p>"
      );
    }

    // set the top nodes url
    $("#node1 a").append(
      "<p>" + data.results[0].url + "</p>"
    );

    // set number of links
    $("#node1").append(
      "<p>links: " + data.results[0].links + "</p>"
    );

    // call the helper function to build the rest of the tree
    buildHelper(data, 0, 0);

    // set grid dimensions
    $( ".gridDisplay" ).css("grid-template-rows" ,"repeat(" + String((data.dimensions.height*2)+1) + ", 150px 75px)");
    $( ".gridDisplay" ).css("grid-template-columns","repeat(" + String(data.dimensions.width+2) + ", 300px)");
  }

  // handles hovering over text
  hover() {
    $( ".normalNode, .deadNode, .foundNode" ).hover( function() {
      switch($(".gridDisplay").attr("class")) {
        case "gridDisplay out1": $( this ).addClass("in4 topZ");
        break;
        case "gridDisplay out2": $( this ).addClass("in3 topZ");
        break;
        case "gridDisplay out3": $( this ).addClass("in2 topZ");
        break;
        case "gridDisplay noZoom": $( this ).addClass("in1 topZ");
        break;
        case "gridDisplay in1": $( this ).addClass("in1 topZ");
        break;
        case "gridDisplay in2":
        break;
      }
    }, function() {
      $( this ).removeClass("in1");
      $( this ).removeClass("in2");
      $( this ).removeClass("in3");
      $( this ).removeClass("in4");
      $( this ).removeClass("topZ");
    })
  }

  // handles zoom in button
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

  // handles zoom out button
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
