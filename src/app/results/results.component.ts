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
      "url": "http://www.bing.com",
      "n": 4,
      "type": "bfs",
      "search": ""
    },
    "dimensions": {
      "height": 5,
      "width": 616
    },
    "results": [
      {
        "id": 0,
        "depth": 0,
        "title": "Bing",
        "url": "http://www.bing.com",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "id": 1,
        "depth": 1,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 2,
        "depth": 1,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          19,
          20,
          21,
          22,
          23,
          24
        ]
      },
      {
        "id": 3,
        "depth": 1,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          13,
          14,
          15,
          16,
          17,
          18
        ]
      },
      {
        "id": 4,
        "depth": 1,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 5,
        "depth": 1,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          229,
          230,
          231,
          232,
          233,
          234
        ]
      },
      {
        "id": 6,
        "depth": 1,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          7,
          8,
          9,
          10,
          11,
          12
        ]
      },
      {
        "id": 7,
        "depth": 2,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          175,
          176,
          177,
          178,
          179,
          180
        ]
      },
      {
        "id": 8,
        "depth": 2,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          31,
          32,
          33,
          34,
          35,
          36
        ]
      },
      {
        "id": 9,
        "depth": 2,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          73,
          74,
          75,
          76,
          77,
          78
        ]
      },
      {
        "id": 10,
        "depth": 2,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          25,
          26,
          27,
          28,
          29,
          30
        ]
      },
      {
        "id": 11,
        "depth": 2,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          91,
          92,
          93,
          94,
          95,
          96
        ]
      },
      {
        "id": 12,
        "depth": 2,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          37,
          38,
          39,
          40,
          41,
          42
        ]
      },
      {
        "id": 13,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 14,
        "depth": 2,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          85,
          86,
          87,
          88,
          89,
          90
        ]
      },
      {
        "id": 15,
        "depth": 2,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          109,
          110,
          111,
          112,
          113,
          114
        ]
      },
      {
        "id": 16,
        "depth": 2,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 17,
        "depth": 2,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          115,
          116,
          117,
          118,
          119,
          120
        ]
      },
      {
        "id": 18,
        "depth": 2,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          49,
          50,
          51,
          52,
          53,
          54
        ]
      },
      {
        "id": 19,
        "depth": 2,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 20,
        "depth": 2,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          127,
          128,
          129,
          130,
          131,
          132
        ]
      },
      {
        "id": 21,
        "depth": 2,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          79,
          80,
          81,
          82,
          83,
          84
        ]
      },
      {
        "id": 22,
        "depth": 2,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 23,
        "depth": 2,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          289,
          290,
          291,
          292,
          293,
          294
        ]
      },
      {
        "id": 24,
        "depth": 2,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          43,
          44,
          45,
          46,
          47,
          48
        ]
      },
      {
        "id": 25,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          67,
          68,
          69,
          70,
          71,
          72
        ]
      },
      {
        "id": 26,
        "depth": 3,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          55,
          56,
          57,
          58,
          59,
          60
        ]
      },
      {
        "id": 27,
        "depth": 3,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          97,
          98,
          99,
          100,
          101,
          102
        ]
      },
      {
        "id": 28,
        "depth": 3,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          61,
          62,
          63,
          64,
          65,
          66
        ]
      },
      {
        "id": 29,
        "depth": 3,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          151,
          152,
          153,
          154,
          155,
          156
        ]
      },
      {
        "id": 30,
        "depth": 3,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          247,
          248,
          249,
          250,
          251,
          252
        ]
      },
      {
        "id": 31,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          253,
          254,
          255,
          256,
          257,
          258
        ]
      },
      {
        "id": 32,
        "depth": 3,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          265,
          266,
          267,
          268,
          269,
          270
        ]
      },
      {
        "id": 33,
        "depth": 3,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          103,
          104,
          105,
          106,
          107,
          108
        ]
      },
      {
        "id": 34,
        "depth": 3,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          199,
          200,
          201,
          202,
          203,
          204
        ]
      },
      {
        "id": 35,
        "depth": 3,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          259,
          260,
          261,
          262,
          263,
          264
        ]
      },
      {
        "id": 36,
        "depth": 3,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          169,
          170,
          171,
          172,
          173,
          174
        ]
      },
      {
        "id": 37,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          133,
          134,
          135,
          136,
          137,
          138
        ]
      },
      {
        "id": 38,
        "depth": 3,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          139,
          140,
          141,
          142,
          143,
          144
        ]
      },
      {
        "id": 39,
        "depth": 3,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          193,
          194,
          195,
          196,
          197,
          198
        ]
      },
      {
        "id": 40,
        "depth": 3,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          121,
          122,
          123,
          124,
          125,
          126
        ]
      },
      {
        "id": 41,
        "depth": 3,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          145,
          146,
          147,
          148,
          149,
          150
        ]
      },
      {
        "id": 42,
        "depth": 3,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          157,
          158,
          159,
          160,
          161,
          162
        ]
      },
      {
        "id": 43,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          277,
          278,
          279,
          280,
          281,
          282
        ]
      },
      {
        "id": 44,
        "depth": 3,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          187,
          188,
          189,
          190,
          191,
          192
        ]
      },
      {
        "id": 45,
        "depth": 3,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          211,
          212,
          213,
          214,
          215,
          216
        ]
      },
      {
        "id": 46,
        "depth": 3,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          163,
          164,
          165,
          166,
          167,
          168
        ]
      },
      {
        "id": 47,
        "depth": 3,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          271,
          272,
          273,
          274,
          275,
          276
        ]
      },
      {
        "id": 48,
        "depth": 3,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          181,
          182,
          183,
          184,
          185,
          186
        ]
      },
      {
        "id": 49,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          217,
          218,
          219,
          220,
          221,
          222
        ]
      },
      {
        "id": 50,
        "depth": 3,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          241,
          242,
          243,
          244,
          245,
          246
        ]
      },
      {
        "id": 51,
        "depth": 3,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          295,
          296,
          297,
          298,
          299,
          300
        ]
      },
      {
        "id": 52,
        "depth": 3,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          205,
          206,
          207,
          208,
          209,
          210
        ]
      },
      {
        "id": 53,
        "depth": 3,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          235,
          236,
          237,
          238,
          239,
          240
        ]
      },
      {
        "id": 54,
        "depth": 3,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          223,
          224,
          225,
          226,
          227,
          228
        ]
      },
      {
        "id": 55,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 56,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 57,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 58,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 59,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 60,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 61,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 62,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 63,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 64,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 65,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 66,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 67,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 68,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 69,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 70,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 71,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 72,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 73,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          319,
          320,
          321,
          322,
          323,
          324
        ]
      },
      {
        "id": 74,
        "depth": 3,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          307,
          308,
          309,
          310,
          311,
          312
        ]
      },
      {
        "id": 75,
        "depth": 3,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          283,
          284,
          285,
          286,
          287,
          288
        ]
      },
      {
        "id": 76,
        "depth": 3,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          301,
          302,
          303,
          304,
          305,
          306
        ]
      },
      {
        "id": 77,
        "depth": 3,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          313,
          314,
          315,
          316,
          317,
          318
        ]
      },
      {
        "id": 78,
        "depth": 3,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          325,
          326,
          327,
          328,
          329,
          330
        ]
      },
      {
        "id": 79,
        "depth": 3,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 80,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          331,
          332,
          333,
          334,
          335,
          336
        ]
      },
      {
        "id": 81,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          337,
          338,
          339,
          340,
          341,
          342
        ]
      },
      {
        "id": 82,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 83,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          475,
          476,
          477,
          478,
          479,
          480
        ]
      },
      {
        "id": 84,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          343,
          344,
          345,
          346,
          347,
          348
        ]
      },
      {
        "id": 85,
        "depth": 3,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 86,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          361,
          362,
          363,
          364,
          365,
          366
        ]
      },
      {
        "id": 87,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          523,
          524,
          525,
          526,
          527,
          528
        ]
      },
      {
        "id": 88,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 89,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          391,
          392,
          393,
          394,
          395,
          396
        ]
      },
      {
        "id": 90,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          385,
          386,
          387,
          388,
          389,
          390
        ]
      },
      {
        "id": 91,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          355,
          356,
          357,
          358,
          359,
          360
        ]
      },
      {
        "id": 92,
        "depth": 3,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          367,
          368,
          369,
          370,
          371,
          372
        ]
      },
      {
        "id": 93,
        "depth": 3,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          469,
          470,
          471,
          472,
          473,
          474
        ]
      },
      {
        "id": 94,
        "depth": 3,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          349,
          350,
          351,
          352,
          353,
          354
        ]
      },
      {
        "id": 95,
        "depth": 3,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          373,
          374,
          375,
          376,
          377,
          378
        ]
      },
      {
        "id": 96,
        "depth": 3,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          379,
          380,
          381,
          382,
          383,
          384
        ]
      },
      {
        "id": 97,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 98,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 99,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 100,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 101,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 102,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 103,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 104,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 105,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 106,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 107,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 108,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 109,
        "depth": 3,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 110,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          403,
          404,
          405,
          406,
          407,
          408
        ]
      },
      {
        "id": 111,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          409,
          410,
          411,
          412,
          413,
          414
        ]
      },
      {
        "id": 112,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 113,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          457,
          458,
          459,
          460,
          461,
          462
        ]
      },
      {
        "id": 114,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          397,
          398,
          399,
          400,
          401,
          402
        ]
      },
      {
        "id": 115,
        "depth": 3,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          427,
          428,
          429,
          430,
          431,
          432
        ]
      },
      {
        "id": 116,
        "depth": 3,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          421,
          422,
          423,
          424,
          425,
          426
        ]
      },
      {
        "id": 117,
        "depth": 3,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          415,
          416,
          417,
          418,
          419,
          420
        ]
      },
      {
        "id": 118,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 119,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          439,
          440,
          441,
          442,
          443,
          444
        ]
      },
      {
        "id": 120,
        "depth": 3,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          433,
          434,
          435,
          436,
          437,
          438
        ]
      },
      {
        "id": 121,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 122,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 123,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 124,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 125,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 126,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 127,
        "depth": 3,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 128,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          451,
          452,
          453,
          454,
          455,
          456
        ]
      },
      {
        "id": 129,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          445,
          446,
          447,
          448,
          449,
          450
        ]
      },
      {
        "id": 130,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 131,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          481,
          482,
          483,
          484,
          485,
          486
        ]
      },
      {
        "id": 132,
        "depth": 3,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          463,
          464,
          465,
          466,
          467,
          468
        ]
      },
      {
        "id": 133,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 134,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 135,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 136,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 137,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 138,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 139,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 140,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 141,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 142,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 143,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 144,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 145,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 146,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 147,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 148,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 149,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 150,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 151,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 152,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 153,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 154,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 155,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 156,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 157,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 158,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 159,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 160,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 161,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 162,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 163,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 164,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 165,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 166,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 167,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 168,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 169,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 170,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 171,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 172,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 173,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 174,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 175,
        "depth": 3,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          499,
          500,
          501,
          502,
          503,
          504
        ]
      },
      {
        "id": 176,
        "depth": 3,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          517,
          518,
          519,
          520,
          521,
          522
        ]
      },
      {
        "id": 177,
        "depth": 3,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          487,
          488,
          489,
          490,
          491,
          492
        ]
      },
      {
        "id": 178,
        "depth": 3,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          493,
          494,
          495,
          496,
          497,
          498
        ]
      },
      {
        "id": 179,
        "depth": 3,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          505,
          506,
          507,
          508,
          509,
          510
        ]
      },
      {
        "id": 180,
        "depth": 3,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          511,
          512,
          513,
          514,
          515,
          516
        ]
      },
      {
        "id": 181,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 182,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 183,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 184,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 185,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 186,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 187,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 188,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 189,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 190,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 191,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 192,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 193,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 194,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 195,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 196,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 197,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 198,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 199,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 200,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 201,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 202,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 203,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 204,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 205,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 206,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 207,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 208,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 209,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 210,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 211,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 212,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 213,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 214,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 215,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 216,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 217,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 218,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 219,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 220,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 221,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 222,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 223,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 224,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 225,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 226,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 227,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 228,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 229,
        "depth": 2,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          529,
          530,
          531,
          532,
          533,
          534
        ]
      },
      {
        "id": 230,
        "depth": 2,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          535,
          536,
          537,
          538,
          539,
          540
        ]
      },
      {
        "id": 231,
        "depth": 2,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          553,
          554,
          555,
          556,
          557,
          558
        ]
      },
      {
        "id": 232,
        "depth": 2,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 233,
        "depth": 2,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          541,
          542,
          543,
          544,
          545,
          546
        ]
      },
      {
        "id": 234,
        "depth": 2,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          547,
          548,
          549,
          550,
          551,
          552
        ]
      },
      {
        "id": 235,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 236,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 237,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 238,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 239,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 240,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 241,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 242,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 243,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 244,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 245,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 246,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 247,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 248,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 249,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 250,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 251,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 252,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 253,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 254,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 255,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 256,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 257,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 258,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 259,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 260,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 261,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 262,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 263,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 264,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 265,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 266,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 267,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 268,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 269,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 270,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 271,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 272,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 273,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 274,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 275,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 276,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 277,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 278,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 279,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 280,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 281,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 282,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 283,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 284,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 285,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 286,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 287,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 288,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 289,
        "depth": 3,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          559,
          560,
          561,
          562,
          563,
          564
        ]
      },
      {
        "id": 290,
        "depth": 3,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          565,
          566,
          567,
          568,
          569,
          570
        ]
      },
      {
        "id": 291,
        "depth": 3,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          571,
          572,
          573,
          574,
          575,
          576
        ]
      },
      {
        "id": 292,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 293,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          583,
          584,
          585,
          586,
          587,
          588
        ]
      },
      {
        "id": 294,
        "depth": 3,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          577,
          578,
          579,
          580,
          581,
          582
        ]
      },
      {
        "id": 295,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 296,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 297,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 298,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 299,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 300,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 301,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 302,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 303,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 304,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 305,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 306,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 307,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 308,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 309,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 310,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 311,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 312,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 313,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 314,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 315,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 316,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 317,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 318,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 319,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 320,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 321,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 322,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 323,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 324,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 325,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 326,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 327,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 328,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 329,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 330,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 331,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 332,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 333,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 334,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 335,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 336,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 337,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 338,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 339,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 340,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 341,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 342,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 343,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 344,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 345,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 346,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 347,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 348,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 349,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 350,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 351,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 352,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 353,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 354,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 355,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 356,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 357,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 358,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 359,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 360,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 361,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 362,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 363,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 364,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 365,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 366,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 367,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 368,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 369,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 370,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 371,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 372,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 373,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 374,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 375,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 376,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 377,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 378,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 379,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 380,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 381,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 382,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 383,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 384,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 385,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 386,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 387,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 388,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 389,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 390,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 391,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 392,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 393,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 394,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 395,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 396,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 397,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 398,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 399,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 400,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 401,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 402,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 403,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 404,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 405,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 406,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 407,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 408,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 409,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 410,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 411,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 412,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 413,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 414,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 415,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 416,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 417,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 418,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 419,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 420,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 421,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 422,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 423,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 424,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 425,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 426,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 427,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=web&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 428,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 429,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 430,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 431,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 432,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 433,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 434,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 435,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 436,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 437,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 438,
        "depth": 4,
        "title": "Bing  - Shopping",
        "url": "http://www.bing.com/shop?FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 439,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 440,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 441,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 442,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 443,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 444,
        "depth": 4,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 445,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 446,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 447,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 448,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 449,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 450,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 451,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 452,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 453,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 454,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 455,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 456,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 457,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 458,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 459,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 460,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 461,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 462,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 463,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 464,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 465,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 466,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 467,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 468,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 469,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 470,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 471,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 472,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 473,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 474,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 475,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 476,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 477,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 478,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 479,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 480,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 481,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 482,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 483,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 484,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 485,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 486,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 487,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 488,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 489,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 490,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 491,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 492,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 493,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 494,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 495,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 496,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 497,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 498,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 499,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 500,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 501,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 502,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 503,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 504,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 505,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 506,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 507,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 508,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 509,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 510,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 511,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 512,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 513,
        "depth": 4,
        "title": "MSN Weather",
        "url": "http://www.msn.com/en-us/weather",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 514,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 515,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 516,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 517,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 518,
        "depth": 4,
        "title": "Breaking News Stories from US and Around the World | MSN News",
        "url": "http://www.msn.com/en-us/news",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 519,
        "depth": 4,
        "title": "Entertainment News, Celebrity Photos and Videos | MSN Entertainment",
        "url": "http://www.msn.com/en-us/entertainment",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 520,
        "depth": 4,
        "title": "Sports News, Scores, Schedules, Stats, Photos and Videos | MSN Sports",
        "url": "http://www.msn.com/en-us/sports",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 521,
        "depth": 4,
        "title": "Stock Quotes, Business News and Data from Stock Markets | MSN Money",
        "url": "http://www.msn.com/en-us/money",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 522,
        "depth": 4,
        "title": "Style, Hot Trends, Love, Horoscopes, and More | MSN Lifestyle",
        "url": "http://www.msn.com/en-us/lifestyle",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 523,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 524,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 525,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 526,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 527,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 528,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 529,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=web&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          589,
          590,
          591,
          592,
          593,
          594
        ]
      },
      {
        "id": 530,
        "depth": 3,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          709,
          710,
          711,
          712,
          713,
          714
        ]
      },
      {
        "id": 531,
        "depth": 3,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          595,
          596,
          597,
          598,
          599,
          600
        ]
      },
      {
        "id": 532,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 533,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          727,
          728,
          729,
          730,
          731,
          732
        ]
      },
      {
        "id": 534,
        "depth": 3,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          625,
          626,
          627,
          628,
          629,
          630
        ]
      },
      {
        "id": 535,
        "depth": 3,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          643,
          644,
          645,
          646,
          647,
          648
        ]
      },
      {
        "id": 536,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          679,
          680,
          681,
          682,
          683,
          684
        ]
      },
      {
        "id": 537,
        "depth": 3,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          715,
          716,
          717,
          718,
          719,
          720
        ]
      },
      {
        "id": 538,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 539,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          601,
          602,
          603,
          604,
          605,
          606
        ]
      },
      {
        "id": 540,
        "depth": 3,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          619,
          620,
          621,
          622,
          623,
          624
        ]
      },
      {
        "id": 541,
        "depth": 3,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          607,
          608,
          609,
          610,
          611,
          612
        ]
      },
      {
        "id": 542,
        "depth": 3,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          673,
          674,
          675,
          676,
          677,
          678
        ]
      },
      {
        "id": 543,
        "depth": 3,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          631,
          632,
          633,
          634,
          635,
          636
        ]
      },
      {
        "id": 544,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 545,
        "depth": 3,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          613,
          614,
          615,
          616,
          617,
          618
        ]
      },
      {
        "id": 546,
        "depth": 3,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          691,
          692,
          693,
          694,
          695,
          696
        ]
      },
      {
        "id": 547,
        "depth": 3,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          637,
          638,
          639,
          640,
          641,
          642
        ]
      },
      {
        "id": 548,
        "depth": 3,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          655,
          656,
          657,
          658,
          659,
          660
        ]
      },
      {
        "id": 549,
        "depth": 3,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          703,
          704,
          705,
          706,
          707,
          708
        ]
      },
      {
        "id": 550,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 551,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          721,
          722,
          723,
          724,
          725,
          726
        ]
      },
      {
        "id": 552,
        "depth": 3,
        "title": "Bing  - Shopping",
        "url": "http://www.bing.com/shop?FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          697,
          698,
          699,
          700,
          701,
          702
        ]
      },
      {
        "id": 553,
        "depth": 3,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          649,
          650,
          651,
          652,
          653,
          654
        ]
      },
      {
        "id": 554,
        "depth": 3,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          661,
          662,
          663,
          664,
          665,
          666
        ]
      },
      {
        "id": 555,
        "depth": 3,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          685,
          686,
          687,
          688,
          689,
          690
        ]
      },
      {
        "id": 556,
        "depth": 3,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 557,
        "depth": 3,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          733,
          734,
          735,
          736,
          737,
          738
        ]
      },
      {
        "id": 558,
        "depth": 3,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 6,
        "children": [
          667,
          668,
          669,
          670,
          671,
          672
        ]
      },
      {
        "id": 559,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=web&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 560,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 561,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 562,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 563,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 564,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 565,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 566,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 567,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 568,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 569,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 570,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 571,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 572,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 573,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 574,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 575,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 576,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 577,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 578,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 579,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 580,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 581,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 582,
        "depth": 4,
        "title": "Bing  - Shopping",
        "url": "http://www.bing.com/shop?FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 583,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 584,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 585,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 586,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 587,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 588,
        "depth": 4,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 589,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 590,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 591,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 592,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 593,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 594,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 595,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 596,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 597,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 598,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 599,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 600,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 601,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 602,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 603,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 604,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 605,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 606,
        "depth": 4,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 607,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=web&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 608,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 609,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 610,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 611,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 612,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 613,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 614,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 615,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 616,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 617,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 618,
        "depth": 4,
        "title": "Bing  - Shopping",
        "url": "http://www.bing.com/shop?FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 619,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 620,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 621,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 622,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 623,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 624,
        "depth": 4,
        "title": "Bing  - Shopping",
        "url": "http://www.bing.com/shop?FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 625,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 626,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 627,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 628,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 629,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 630,
        "depth": 4,
        "title": "Bing  - Shopping",
        "url": "http://www.bing.com/shop?FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 631,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 632,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 633,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 634,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 635,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 636,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 637,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=web&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 638,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 639,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 640,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 641,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 642,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 643,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=web&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 644,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 645,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 646,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 647,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 648,
        "depth": 4,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 649,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=web&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 650,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 651,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 652,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 653,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 654,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 655,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 656,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 657,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 658,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 659,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 660,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 661,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 662,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 663,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 664,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 665,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 666,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 667,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 668,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 669,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 670,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 671,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 672,
        "depth": 4,
        "title": "Bing  - Shopping",
        "url": "http://www.bing.com/shop?FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 673,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 674,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 675,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 676,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 677,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 678,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 679,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 680,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 681,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 682,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 683,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 684,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 685,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0)",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 686,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 687,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 688,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?FORM=Z9LH2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 689,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=Z9LH3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 690,
        "depth": 4,
        "title": "MSN | Outlook, Office, Skype, Bing, Breaking News, and Latest Videos",
        "url": "http://www.msn.com/en-us/?ocid=BHEA000",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 691,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?FORM=Z9FD1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 692,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0);",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 693,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "http://www.bing.com/rewards/dashboard",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 694,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "http://www.bing.com/rewards/dashboard",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 695,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:;",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 696,
        "depth": 4,
        "title": "Invalid Page/Timeout.",
        "url": "javascript:void(0);",
        "dead": 1,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 697,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=web&mkt=en-US&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 698,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 699,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 700,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 701,
        "depth": 4,
        "title": "Bing News",
        "url": "http://www.bing.com/news/search?q=&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 702,
        "depth": 4,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 703,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 704,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 705,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 706,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 707,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 708,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 709,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 710,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=images&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 711,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 712,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 713,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 714,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 715,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 716,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 717,
        "depth": 4,
        "title": "Bing",
        "url": "http://www.bing.com/?scope=video&nr=1&FORM=NOFORM",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 718,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 719,
        "depth": 4,
        "title": "news for you - Bing News",
        "url": "http://www.bing.com/news/search?q=news+for+you&FORM=HDRSC6",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 720,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 721,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 722,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 723,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 724,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 725,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 726,
        "depth": 4,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 727,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 728,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 729,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 730,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 731,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 732,
        "depth": 4,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 733,
        "depth": 4,
        "title": "news for you - Bing",
        "url": "http://www.bing.com/search?q=news+for+you&FORM=HDRSC1",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 734,
        "depth": 4,
        "title": "news for you - Bing images",
        "url": "http://www.bing.com/images/search?q=news+for+you&FORM=HDRSC2",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 735,
        "depth": 4,
        "title": "news for you - Bing video",
        "url": "http://www.bing.com/videos/search?q=news+for+you&FORM=HDRSC3",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 736,
        "depth": 4,
        "title": " Maps",
        "url": "https://www.bing.com/maps/sharing?q=news+for+you&FORM=HDRSC4",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 737,
        "depth": 4,
        "title": "news for you - Bing  - Shopping",
        "url": "http://www.bing.com/shop?q=news+for+you&FORM=SHOPTB",
        "dead": 0,
        "found": 0,
        "links": 0,
        "children": []
      },
      {
        "id": 738,
        "depth": 4,
        "title": "Bing  - My saves",
        "url": "http://www.bing.com/saves?FORM=HDRSAV",
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


  // TODO:FIX ZOOMS

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
