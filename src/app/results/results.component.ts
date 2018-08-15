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
  testString: any = {
    "input": {
      "url": "http://www.google.com",
      "n": 2,
      "type": "bfs",
      "search": ""
    },
    "dimensions": {
      "height": 3,
      "width": 308
    },
    "results": [
      {
        "id": 0,
        "depth": 0,
        "title": "Google",
        "url": "http://www.google.com",
        "dead": 0,
        "found": 0,
        "links": 20,
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
          20
        ]
      },
      {
        "id": 1,
        "depth": 1,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=ww",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          88,
          89,
          90,
          91,
          92,
          93,
          94,
          95,
          96,
          97,
          98,
          99,
          100
        ]
      },
      {
        "id": 2,
        "depth": 1,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tab=wi",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
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
          60
        ]
      },
      {
        "id": 3,
        "depth": 1,
        "title": "  Google Maps  ",
        "url": "https://www.google.com:443/maps?hl=en&tab=wl",
        "dead": 0,
        "found": 0,
        "links": 1,
        "children": [
          141
        ]
      },
      {
        "id": 4,
        "depth": 1,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=w8",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          289,
          290,
          291,
          292,
          293,
          294,
          295,
          296,
          297,
          298,
          299,
          300,
          301,
          302,
          303,
          304,
          305,
          306,
          307,
          308
        ]
      },
      {
        "id": 5,
        "depth": 1,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US&tab=w1",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          269,
          270,
          271,
          272,
          273,
          274,
          275,
          276,
          277,
          278,
          279,
          280,
          281,
          282,
          283,
          284,
          285,
          286,
          287,
          288
        ]
      },
      {
        "id": 6,
        "depth": 1,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          309,
          310,
          311,
          312,
          313,
          314,
          315,
          316,
          317,
          318,
          319,
          320,
          321,
          322,
          323,
          324,
          325,
          326,
          327,
          328
        ]
      },
      {
        "id": 7,
        "depth": 1,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dwm&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 7,
        "children": [
          173,
          174,
          175,
          176,
          177,
          178,
          179
        ]
      },
      {
        "id": 8,
        "depth": 1,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3Dwo&followup=https://drive.google.com/?tab%3Dwo&emr=1",
        "dead": 0,
        "found": 0,
        "links": 7,
        "children": [
          180,
          181,
          182,
          183,
          184,
          185,
          186
        ]
      },
      {
        "id": 9,
        "depth": 1,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          234,
          235,
          236,
          237,
          238,
          239,
          240,
          241,
          242,
          243,
          244,
          245,
          246,
          247,
          248,
          249,
          250,
          251,
          252,
          253
        ]
      },
      {
        "id": 10,
        "depth": 1,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dwc&followup=https://calendar.google.com/calendar/render?tab%3Dwc&scc=1",
        "dead": 0,
        "found": 0,
        "links": 7,
        "children": [
          207,
          208,
          209,
          210,
          211,
          212,
          213
        ]
      },
      {
        "id": 11,
        "depth": 1,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          121,
          122,
          123,
          124,
          125,
          126,
          127,
          128,
          129,
          130,
          131,
          132,
          133,
          134,
          135,
          136,
          137,
          138,
          139,
          140
        ]
      },
      {
        "id": 12,
        "depth": 1,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 7,
        "children": [
          159,
          160,
          161,
          162,
          163,
          164,
          165
        ]
      },
      {
        "id": 13,
        "depth": 1,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=wp",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          101,
          102,
          103,
          104,
          105,
          106,
          107,
          108,
          109,
          110,
          111,
          112,
          113,
          114,
          115,
          116,
          117,
          118,
          119,
          120
        ]
      },
      {
        "id": 14,
        "depth": 1,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=wf",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
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
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40
        ]
      },
      {
        "id": 15,
        "depth": 1,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 15,
        "children": [
          254,
          255,
          256,
          257,
          258,
          259,
          260,
          261,
          262,
          263,
          264,
          265,
          266,
          267,
          268
        ]
      },
      {
        "id": 16,
        "depth": 1,
        "title": "finance - Google Search",
        "url": "http://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          187,
          188,
          189,
          190,
          191,
          192,
          193,
          194,
          195,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206
        ]
      },
      {
        "id": 17,
        "depth": 1,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 17,
        "children": [
          142,
          143,
          144,
          145,
          146,
          147,
          148,
          149,
          150,
          151,
          152,
          153,
          154,
          155,
          156,
          157,
          158
        ]
      },
      {
        "id": 18,
        "depth": 1,
        "title": "Google Videos",
        "url": "http://www.google.com/videohp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          61,
          62,
          63,
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79,
          80
        ]
      },
      {
        "id": 19,
        "depth": 1,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 7,
        "children": [
          166,
          167,
          168,
          169,
          170,
          171,
          172
        ]
      },
      {
        "id": 20,
        "depth": 1,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 20,
        "children": [
          214,
          215,
          216,
          217,
          218,
          219,
          220,
          221,
          222,
          223,
          224,
          225,
          226,
          227,
          228,
          229,
          230,
          231,
          232,
          233
        ]
      },
      {
        "id": 21,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=fw",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 22,
        "depth": 2,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tab=fi",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 23,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com:443/maps?hl=en&tab=fl",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 24,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=f8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 25,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US&tab=f1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 26,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 27,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dfm&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 28,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3Dfo&followup=https://drive.google.com/?tab%3Dfo&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 29,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 30,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dfc&followup=https://calendar.google.com/calendar/render?tab%3Dfc&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 31,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 32,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 33,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=fp",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 34,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=ff",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 35,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 36,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "http://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 37,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 38,
        "depth": 2,
        "title": "Google Videos",
        "url": "http://www.google.com/videohp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 39,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 40,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 41,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=iw",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 42,
        "depth": 2,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tab=ii",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 43,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com:443/maps?hl=en&tab=il",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 44,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=i8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 45,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US&tab=i1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 46,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 47,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dim&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 48,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3Dio&followup=https://drive.google.com/?tab%3Dio&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 49,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 50,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dic&followup=https://calendar.google.com/calendar/render?tab%3Dic&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 51,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 52,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 53,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=ip",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 54,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=if",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 55,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 56,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "http://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 57,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 58,
        "depth": 2,
        "title": "Google Videos",
        "url": "http://www.google.com/videohp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 59,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 60,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 61,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=vw",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 62,
        "depth": 2,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tab=vi",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 63,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com:443/maps?hl=en&tab=vl",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 64,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=v8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 65,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US&tab=v1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 66,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 67,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dvm&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 68,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3Dvo&followup=https://drive.google.com/?tab%3Dvo&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 69,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 70,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dvc&followup=https://calendar.google.com/calendar/render?tab%3Dvc&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 71,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 72,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 73,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=vp",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 74,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=vf",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 75,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 76,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "http://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 77,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 78,
        "depth": 2,
        "title": "Google Videos",
        "url": "http://www.google.com/videohp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 79,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 80,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 81,
        "depth": 2,
        "title": "Google Images",
        "url": "https://www.google.com/imghp?hl=en&tab=wi",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 82,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com/maps?hl=en&tab=wl",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 83,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=w8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 84,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US&tab=w1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 85,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 86,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dwm&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 87,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3Dwo&followup=https://drive.google.com/?tab%3Dwo&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 88,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 89,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dwc&followup=https://calendar.google.com/calendar/render?tab%3Dwc&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 90,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en&tab=wT",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 91,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 92,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=wp",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 93,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=wf",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 94,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 95,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "https://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 96,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 97,
        "depth": 2,
        "title": "Google Videos",
        "url": "http://www.google.com/videohp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 98,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 99,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 100,
        "depth": 2,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/webhp%3Ftab%3Dww",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 101,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=pw",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 102,
        "depth": 2,
        "title": "Google Images",
        "url": "https://www.google.com/imghp?hl=en&tab=pi",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 103,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com/maps?hl=en&tab=pl",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 104,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=p8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 105,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US&tab=p1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 106,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 107,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dpm&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 108,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3Dpo&followup=https://drive.google.com/?tab%3Dpo&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 109,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 110,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dpc&followup=https://calendar.google.com/calendar/render?tab%3Dpc&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 111,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en&tab=pT",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 112,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 113,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=pp",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 114,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=pf",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 115,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 116,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "https://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 117,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 118,
        "depth": 2,
        "title": "Google Videos",
        "url": "http://www.google.com/videohp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 119,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 120,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 121,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=Tw",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 122,
        "depth": 2,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tab=Ti",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 123,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com/maps?hl=en&tab=Tl",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 124,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=T8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 125,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US&tab=T1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 126,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 127,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3DTm&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 128,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3DTo&followup=https://drive.google.com/?tab%3DTo&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 129,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 130,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3DTc&followup=https://calendar.google.com/calendar/render?tab%3DTc&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 131,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en&tab=TT",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 132,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 133,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=Tp",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 134,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=Tf",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 135,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 136,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "https://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 137,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 138,
        "depth": 2,
        "title": "Google Videos",
        "url": "http://www.google.com/videohp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 139,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 140,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 141,
        "depth": 2,
        "title": "Enable JavaScript to see Google Maps - Google Maps Help",
        "url": "https://support.google.com/maps/answer/6259159?hl=en&authuser=0&p=no_javascript&visit_id=0-636688421135371130-1728370972&rd=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 142,
        "depth": 2,
        "title": "Google Photos - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.apps.photos&referrer=utm_source%3Daboutpage",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 143,
        "depth": 2,
        "title": "\u200eGoogle Photos on the App Store",
        "url": "https://itunes.apple.com/app/apple-store/id962194608?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 144,
        "depth": 2,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://photos.google.com/login&followup=https://photos.google.com/login",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 145,
        "depth": 2,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://photos.google.com/login&followup=https://photos.google.com/login",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 146,
        "depth": 2,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://photos.google.com/login&followup=https://photos.google.com/login",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 147,
        "depth": 2,
        "title": "Google Photos - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.apps.photos&referrer=utm_source%3Daboutpage",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 148,
        "depth": 2,
        "title": "\u200eGoogle Photos on the App Store",
        "url": "https://itunes.apple.com/app/apple-store/id962194608?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 149,
        "depth": 2,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://photos.google.com/login&followup=https://photos.google.com/login",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 150,
        "depth": 2,
        "title": "Google Photos - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.apps.photos&referrer=utm_source%3Daboutpage",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 151,
        "depth": 2,
        "title": "\u200eGoogle Photos on the App Store",
        "url": "https://itunes.apple.com/app/apple-store/id962194608?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 152,
        "depth": 2,
        "title": "Google Photos - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.apps.photos&referrer=utm_source%3Daboutpage",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 153,
        "depth": 2,
        "title": "\u200eGoogle Photos on the App Store",
        "url": "https://itunes.apple.com/app/apple-store/id962194608?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 154,
        "depth": 2,
        "title": "",
        "url": "https://www.google.com/intl/en/policies/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 155,
        "depth": 2,
        "title": "Google Photos - Google+",
        "url": "https://plus.google.com/+GooglePhotos/posts",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 156,
        "depth": 2,
        "title": "Google Photos (@googlephotos) | Twitter",
        "url": "https://twitter.com/googlephotos",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 157,
        "depth": 2,
        "title": "\u200eGoogle Photos on the App Store",
        "url": "https://itunes.apple.com/app/apple-store/id962194608?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 158,
        "depth": 2,
        "title": "Google Photos - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.apps.photos&referrer=utm_source%3Daboutpage",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 159,
        "depth": 2,
        "title": "Google - Tips",
        "url": "https://get.google.com/apptips/tips/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 160,
        "depth": 2,
        "title": "Google - Tips",
        "url": "https://get.google.com/apptips/tips/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 161,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 162,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 163,
        "depth": 2,
        "title": "Our latest | Google",
        "url": "https://www.google.com/intl/en/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 164,
        "depth": 2,
        "title": "",
        "url": "https://www.google.com/intl/en/policies/privacy/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 165,
        "depth": 2,
        "title": "",
        "url": "https://www.google.com/intl/en/policies/terms/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 166,
        "depth": 2,
        "title": "Google Accounts",
        "url": "https://accounts.google.com/signin/usernamerecovery?continue=https%3A%2F%2Fdocs.google.com%2Fdocument%2F%3Fusp%3Ddocs_alc&service=wise&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 167,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fdocs.google.com%2Fdocument%2F%3Fusp%3Ddocs_alc&followup=https%3A%2F%2Fdocs.google.com%2Fdocument%2F%3Fusp%3Ddocs_alc&ltmpl=docs&service=wise&sacu=1&rip=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 168,
        "depth": 2,
        "title": "\n  Create your Google Account\n  ",
        "url": "https://accounts.google.com/SignUp?service=wise&continue=https%3A%2F%2Fdocs.google.com%2Fdocument%2F%3Fusp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 169,
        "depth": 2,
        "title": "Our latest | Google",
        "url": "https://www.google.com/intl/en/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 170,
        "depth": 2,
        "title": "Privacy Policy – Privacy & Terms – Google",
        "url": "https://policies.google.com/privacy?gl=US&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 171,
        "depth": 2,
        "title": "Google Terms of Service – Privacy & Terms – Google",
        "url": "https://policies.google.com/terms?gl=US&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 172,
        "depth": 2,
        "title": "Google Account Help",
        "url": "https://support.google.com/accounts/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 173,
        "depth": 2,
        "title": "Google Accounts",
        "url": "https://accounts.google.com/signin/usernamerecovery?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Dwm&service=mail&scc=1&rm=false&osid=1&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 174,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Dwm&ltmpl=default&service=mail&sacu=1&scc=1&rip=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 175,
        "depth": 2,
        "title": "\n  Create your Google Account\n  ",
        "url": "https://accounts.google.com/SignUp?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Dwm&ltmpl=default",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 176,
        "depth": 2,
        "title": "Our latest | Google",
        "url": "https://www.google.com/intl/en/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 177,
        "depth": 2,
        "title": "Privacy Policy – Privacy & Terms – Google",
        "url": "https://policies.google.com/privacy?gl=US&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 178,
        "depth": 2,
        "title": "Google Terms of Service – Privacy & Terms – Google",
        "url": "https://policies.google.com/terms?gl=US&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 179,
        "depth": 2,
        "title": "Google Account Help",
        "url": "https://support.google.com/accounts/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 180,
        "depth": 2,
        "title": "Google Accounts",
        "url": "https://accounts.google.com/signin/usernamerecovery?continue=https%3A%2F%2Fdrive.google.com%2F%3Ftab%3Dwo&service=wise&osid=1&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 181,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fdrive.google.com%2F%3Ftab%3Dwo&followup=https%3A%2F%2Fdrive.google.com%2F%3Ftab%3Dwo&service=wise&sacu=1&rip=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 182,
        "depth": 2,
        "title": "\n  Create your Google Account\n  ",
        "url": "https://accounts.google.com/SignUp?service=wise&continue=https%3A%2F%2Fdrive.google.com%2F%3Ftab%3Dwo",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 183,
        "depth": 2,
        "title": "Our latest | Google",
        "url": "https://www.google.com/intl/en/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 184,
        "depth": 2,
        "title": "Privacy Policy – Privacy & Terms – Google",
        "url": "https://policies.google.com/privacy?gl=US&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 185,
        "depth": 2,
        "title": "Google Terms of Service – Privacy & Terms – Google",
        "url": "https://policies.google.com/terms?gl=US&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 186,
        "depth": 2,
        "title": "Google Account Help",
        "url": "https://support.google.com/accounts/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 187,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "http://www.google.com/search?q=finance&gbv=1&sei=eHdjW6ePBMrWjwTm8a7QCQ",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 188,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=ww",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 189,
        "depth": 2,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tbm=isch&source=og&tab=wi",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 190,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com:443/maps?hl=en&tab=wl",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 191,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=w8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 192,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 193,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 194,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3Dwm&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 195,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3Dwo&followup=https://drive.google.com/?tab%3Dwo&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 196,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 197,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3Dwc&followup=https://calendar.google.com/calendar/render?tab%3Dwc&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 198,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 199,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 200,
        "depth": 2,
        "title": "Google",
        "url": "http://www.google.com/webhp?hl=en&tbo=u&tbm=bks&source=og&tab=wp",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 201,
        "depth": 2,
        "title": "Google",
        "url": "http://www.google.com/webhp?hl=en&tbo=u&tbm=shop&source=og&tab=wf",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 202,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 203,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "http://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 204,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 205,
        "depth": 2,
        "title": "Google",
        "url": "http://www.google.com/webhp?hl=en&tbo=u&tbm=vid&source=og&tab=wv",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 206,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 207,
        "depth": 2,
        "title": "Google Accounts",
        "url": "https://accounts.google.com/signin/usernamerecovery?continue=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender%3Ftab%3Dwc&service=cl&scc=1&osid=1&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 208,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender%3Ftab%3Dwc&followup=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender%3Ftab%3Dwc&service=cl&sacu=1&scc=1&rip=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 209,
        "depth": 2,
        "title": "\n  Create your Google Account\n  ",
        "url": "https://accounts.google.com/SignUp?service=cl&continue=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Frender%3Ftab%3Dwc",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 210,
        "depth": 2,
        "title": "Our latest | Google",
        "url": "https://www.google.com/intl/en/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 211,
        "depth": 2,
        "title": "Privacy Policy – Privacy & Terms – Google",
        "url": "https://policies.google.com/privacy?gl=US&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 212,
        "depth": 2,
        "title": "Google Terms of Service – Privacy & Terms – Google",
        "url": "https://policies.google.com/terms?gl=US&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 213,
        "depth": 2,
        "title": "Google Account Help",
        "url": "https://support.google.com/accounts/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 214,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/our-company/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 215,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/our-commitments/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 216,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 217,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/assistant/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 218,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/pixel/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 219,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/allo-duo/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 220,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/home/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 221,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/google-photos/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 222,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/search/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 223,
        "depth": 2,
        "title": "Google Search - Stay in the Know with Your Google App",
        "url": "https://www.google.com/search/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 224,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 225,
        "depth": 2,
        "title": "\u200eGoogle on the App Store",
        "url": "https://itunes.apple.com/app/google-search/id284815942?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 226,
        "depth": 2,
        "title": "Google - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 227,
        "depth": 2,
        "title": "Google Search Help",
        "url": "https://support.google.com/websearch?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 228,
        "depth": 2,
        "title": "\n      About – Google Maps\n    ",
        "url": "https://www.google.com/maps/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 229,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com/maps",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 230,
        "depth": 2,
        "title": "\u200eGoogle Maps - Transit & Food on the App Store",
        "url": "https://itunes.apple.com/app/google-maps/id585027354?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 231,
        "depth": 2,
        "title": "Maps - Navigate & Explore - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 232,
        "depth": 2,
        "title": "Google Maps Help",
        "url": "https://support.google.com/maps?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 233,
        "depth": 2,
        "title": "\n      Google Translate\n    ",
        "url": "https://translate.google.com/intl/en/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 234,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/our-company/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 235,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/our-commitments/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 236,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 237,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/assistant/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 238,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/pixel/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 239,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/allo-duo/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 240,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/home/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 241,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/google-photos/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 242,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "https://www.google.com/intl/en/about/products/products/search/",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 243,
        "depth": 2,
        "title": "Google Search - Stay in the Know with Your Google App",
        "url": "https://www.google.com/search/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 244,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 245,
        "depth": 2,
        "title": "\u200eGoogle on the App Store",
        "url": "https://itunes.apple.com/app/google-search/id284815942?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 246,
        "depth": 2,
        "title": "Google - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 247,
        "depth": 2,
        "title": "Google Search Help",
        "url": "https://support.google.com/websearch?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 248,
        "depth": 2,
        "title": "\n      About – Google Maps\n    ",
        "url": "https://www.google.com/maps/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 249,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com/maps",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 250,
        "depth": 2,
        "title": "\u200eGoogle Maps - Transit & Food on the App Store",
        "url": "https://itunes.apple.com/app/google-maps/id585027354?mt=8",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 251,
        "depth": 2,
        "title": "Maps - Navigate & Explore - Apps on Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 252,
        "depth": 2,
        "title": "Google Maps Help",
        "url": "https://support.google.com/maps?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 253,
        "depth": 2,
        "title": "\n      Google Translate\n    ",
        "url": "https://translate.google.com/intl/en/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 254,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 255,
        "depth": 2,
        "title": "Blogger",
        "url": "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.blogger.com%2Fhome&ltmpl=blogger&service=blogger&sacu=1&rip=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 256,
        "depth": 2,
        "title": "Blogger",
        "url": "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.blogger.com%2Fhome%23create&ltmpl=blogger&service=blogger&sacu=1&rip=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 257,
        "depth": 2,
        "title": "Blogger",
        "url": "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.blogger.com%2Fhome%23create&ltmpl=blogger&service=blogger&sacu=1&rip=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 258,
        "depth": 2,
        "title": "Blogger",
        "url": "https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fwww.blogger.com%2Fhome%23create&ltmpl=blogger&service=blogger&sacu=1&rip=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 259,
        "depth": 2,
        "title": "Blogger Help",
        "url": "https://support.google.com/blogger/?p=help_home&hl=en&authuser=0",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 260,
        "depth": 2,
        "title": "Google Groups",
        "url": "https://productforums.google.com/forum/?hl=en#!forum/blogger",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 261,
        "depth": 2,
        "title": "  Blogger\n - YouTube",
        "url": "https://www.youtube.com/user/BloggerHelp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 262,
        "depth": 2,
        "title": "\nOfficial Blogger Blog\n",
        "url": "https://blogger.googleblog.com/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 263,
        "depth": 2,
        "title": "Blogger - Google+",
        "url": "https://plus.google.com/+Blogger",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 264,
        "depth": 2,
        "title": "Introduction  |  Blogger\n       |  Google Developers",
        "url": "https://developers.google.com/blogger/?hl=en&authuser=0",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 265,
        "depth": 2,
        "title": "Google Groups",
        "url": "https://groups.google.com/forum/?hl=en&authuser=0#!forum/bloggerdev",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 266,
        "depth": 2,
        "title": "",
        "url": "https://www.google.com/intl/en/policies/terms/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 267,
        "depth": 2,
        "title": "",
        "url": "https://www.google.com/intl/en/policies/privacy/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 268,
        "depth": 2,
        "title": "Content policy",
        "url": "https://www.blogger.com/content.g?hl=en&bpli=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 269,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 270,
        "depth": 2,
        "title": "YouTube",
        "url": "https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&hl=en&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fapp%3Ddesktop%26action_handle_signin%3Dtrue%26hl%3Den%26next%3D%252Fupload%26feature%3Dredirect_login&passive=true",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 271,
        "depth": 2,
        "title": "  Trending\n - YouTube",
        "url": "https://www.youtube.com/feed/trending?disable_polymer=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 272,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 273,
        "depth": 2,
        "title": "  Trending\n - YouTube",
        "url": "https://www.youtube.com/feed/trending",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 274,
        "depth": 2,
        "title": "  History\n - YouTube",
        "url": "https://www.youtube.com/feed/history",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 275,
        "depth": 2,
        "title": "YouTube Premium - YouTube",
        "url": "https://www.youtube.com/premium",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 276,
        "depth": 2,
        "title": "YouTube TV - Watch & DVR Live Sports, Shows & News",
        "url": "https://tv.youtube.com/welcome/start/?utm_medium=ep&ve=34273&utm_source=youtube_web&utm_campaign=home",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 277,
        "depth": 2,
        "title": "  Music\n - YouTube",
        "url": "https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 278,
        "depth": 2,
        "title": "  Sports\n - YouTube",
        "url": "https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 279,
        "depth": 2,
        "title": "  Gaming\n - YouTube",
        "url": "https://www.youtube.com/channel/UCOpNcN46UbXVtpKMrmU4Abg",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 280,
        "depth": 2,
        "title": "  YouTube Movies\n - YouTube",
        "url": "https://www.youtube.com/channel/UClgRkhTL3_hImCAmdLfDE4g",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 281,
        "depth": 2,
        "title": "  Movies & Shows\n - YouTube",
        "url": "https://www.youtube.com/channel/UCl8dMTqDrJQ0c8y23UBu4kQ",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 282,
        "depth": 2,
        "title": "  News\n - YouTube",
        "url": "https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 283,
        "depth": 2,
        "title": "  Live\n - YouTube",
        "url": "https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 284,
        "depth": 2,
        "title": "  YouTube Spotlight\n - YouTube",
        "url": "https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 285,
        "depth": 2,
        "title": "  Virtual Reality\n - YouTube",
        "url": "https://www.youtube.com/channel/UCzuqhhs6NWbgTzMuM09WKDQ",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 286,
        "depth": 2,
        "title": "  \n - YouTube",
        "url": "https://www.youtube.com/feed/guide_builder",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 287,
        "depth": 2,
        "title": "YouTube",
        "url": "https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_promo%26next%3D%252F%253Fgl%253DUS%2526tab%253Dw1%26hl%3Den&service=youtube&uilel=3&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 288,
        "depth": 2,
        "title": "  Trending\n - YouTube",
        "url": "https://www.youtube.com/feed/trending",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 289,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp?tab=8w",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 290,
        "depth": 2,
        "title": "Google Images",
        "url": "http://www.google.com/imghp?hl=en&tab=8i",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 291,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com/maps?hl=en&tab=8l",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 292,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en&tab=88",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 293,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US&tab=81",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 294,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 295,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/?tab%3D8m&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 296,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/?tab%3D8o&followup=https://drive.google.com/?tab%3D8o&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 297,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 298,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render?tab%3D8c&followup=https://calendar.google.com/calendar/render?tab%3D8c&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 299,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en&tab=8T",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 300,
        "depth": 2,
        "title": "Google - Apps",
        "url": "https://get.google.com/apptips/apps/?utm_source=googlemobile&utm_campaign=redirect",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 301,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en&tab=8p",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 302,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en&tab=8f",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 303,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 304,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "https://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 305,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 306,
        "depth": 2,
        "title": "Google Videos",
        "url": "http://www.google.com/videohp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 307,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 308,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 309,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US%3Aen",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 310,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 311,
        "depth": 2,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://myaccount.google.com/general-light&followup=https://myaccount.google.com/general-light&csig=AF-SEnZdoU2rsmrBO_ea:1533245327",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 312,
        "depth": 2,
        "title": "Google",
        "url": "https://www.google.com/webhp",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 313,
        "depth": 2,
        "title": "  Google Maps  ",
        "url": "https://www.google.com/maps?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 314,
        "depth": 2,
        "title": "YouTube",
        "url": "https://www.youtube.com/?gl=US",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 315,
        "depth": 2,
        "title": "Google Play",
        "url": "https://play.google.com/store?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 316,
        "depth": 2,
        "title": "Google News",
        "url": "https://news.google.com/?hl=en-US&gl=US&ceid=US:en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 317,
        "depth": 2,
        "title": "Gmail",
        "url": "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 318,
        "depth": 2,
        "title": "Sign in - Google Accounts",
        "url": "https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://contacts.google.com/?hl%3Den&followup=https://contacts.google.com/?hl%3Den&hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 319,
        "depth": 2,
        "title": "Meet Google Drive – One place for all your files",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&osid=1&continue=https://drive.google.com/&followup=https://drive.google.com/&emr=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 320,
        "depth": 2,
        "title": "Google Calendar",
        "url": "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/render&followup=https://calendar.google.com/calendar/render&scc=1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 321,
        "depth": 2,
        "title": "Google Translate",
        "url": "https://translate.google.com/?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 322,
        "depth": 2,
        "title": "Google Photos - All your photos organized and easy to find",
        "url": "https://www.google.com/photos/about/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 323,
        "depth": 2,
        "title": "Our products | Google",
        "url": "https://www.google.com/intl/en/about/products/",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 324,
        "depth": 2,
        "title": "Google Shopping",
        "url": "http://www.google.com/shopping?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 325,
        "depth": 2,
        "title": "finance - Google Search",
        "url": "https://www.google.com/search?q=finance",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 326,
        "depth": 2,
        "title": "Google Docs - create and edit documents online, for free.",
        "url": "https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://docs.google.com/document/?usp%3Ddocs_alc&followup=https://docs.google.com/document/?usp%3Ddocs_alc&ltmpl=docs",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 327,
        "depth": 2,
        "title": "Google Books",
        "url": "https://books.google.com/bkshp?hl=en",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 328,
        "depth": 2,
        "title": "Blogger.com - Create a unique and beautiful blog. It’s easy and free.",
        "url": "https://www.blogger.com/about/?r=1-null_user",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      }
    ]
  }
;


  constructor(private searchService: ParrotSearchService) { }

  ngOnInit() {
    // used to insert jsons for testing
    this.data = this.testString;

    // this.searchService.data.subscribe((success) => {this.data = JSON.parse(success)});
    this.buildPage(this.data);
    this.hover();
    this.grabDrag();
  }

  buildPage(data: any) {
    // local vars that store blank (non-dynamic) divs
    var gDiv = $( ".gridNode" );
    var lDiv = $( ".lineGridNode" );
    var spacer = $( ".spacer" );

    // local vars for setting grid deminsions
    var rowCount: string = "";
    var colCount: string = "";

    // recursive helper function that loops through the data boject and places nodes
    var buildHelper = function(data: any, idx: number, offset: number) {
      for(var i: number=0; i < data.results[idx].links; i++) {
        // var for getting the correct grid depth for a given node
        var nodePos = Math.floor(((data.dimensions.width) * (data.results[data.results[idx].children[i]].depth * 2)));
        // var for counting gridNodes to draw lines in (also helps offset)
        var count: number=0;

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
              for(var j: number=count-1; j > 0; j--) {
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
          buildHelper(data, data.results[idx].children[i], (nodePos - (((data.dimensions.width) * (data.results[data.results[idx].children[i]].depth * 2)))) + i);
        }
      }
    }

    // clone the blank div into the viewWindow to make the grid
    for(var i: number=0; i < (data.dimensions.height*2)*(data.dimensions.width); i++) {
      $(gDiv).clone().appendTo(".gridDisplay").removeClass("hidden").attr("id", "node" + String(i));
      // used for testing. Add to above statement to see node numbers in rendered page
      // .text("node" + String(i))
    }

    // add the subgrid to every other row of gridNodes
    // used for drawing lines
    for(var i: number=1; i <= (data.dimensions.height * 2); i += 2) {
      for(var j: number=0; j < (data.dimensions.width); j++) {
        var currentNode: string = String(Math.floor(((data.dimensions.width) * i) + j));
        $("#node" + currentNode).removeClass("gridNode").addClass("lineGrid");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("topLeft");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("topRight");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("bottomLeft");
        $(lDiv).clone().appendTo("#node" + currentNode).removeClass("hidden").addClass("bottomRight");
      }
    }

    //style the topNode and add link for url and title
    $("#node0").addClass("topNode");
    if(data.results[0].found){
      $("#node0").addClass("topFound");
    }
    $("#node0 a").removeClass("hidden").attr("href", data.results[0].url);

    // set the top nodes title
    if(data.results[0].title === ""){
      $("#node0 a").append(
        "<p>No Title</p>"
      );
    } else {
      $("#node0 a").append(
        "<p>" + data.results[0].title + "</p>"
      );
    }

    // set the top nodes url
    $("#node0 a").append(
      "<p>" + data.results[0].url + "</p>"
    );

    // set number of links
    $("#node0").append(
      "<p>links: " + data.results[0].links + "</p>"
    );

    // call the helper function to build the rest of the tree
    buildHelper(data, 0, 0);


    // this sets the grid templates
    // this method is used instead of repeat()
    for(var i: number=1; i <= data.dimensions.height; i++) {
      rowCount += "150px 75px ";
    }
    for(var i: number=1; i <= data.dimensions.width; i++) {
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
      var curDown = false,
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
    var center = $(".container").width()/2;
    $(".viewWindow").animate({scrollLeft: center}, 800);
  }

  // handles jump right button
  jumpRight() {
    var right = $(".container").width();
    $(".viewWindow").animate({scrollLeft: right}, 800);
  }

}
