import { Component } from '@angular/core';
import * as _ from 'jquery';
import {trigger, animate, style, group, query, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  animations: [
    trigger('routerTransition', [
      transition('welcome => home', [
        query(':enter, :leave', style({ position: 'fixed', height:'250%', width: '100%' })
          , { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
          ], { optional: true }),
        ])
      ])
      transition('home => waiting', [
        query(':enter, :leave', style({ position: 'fixed', height:'250%', width: '100%' })
          , { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
          ], { optional: true }),
        ])
      ])
      transition('waiting => results', [
        query(':enter, :leave', style({ position: 'fixed', height:'250%', width: '100%' })
          , { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
          ], { optional: true }),
        ])
      ])
      transition('results => home', [
        query(':enter, :leave', style({ position: 'fixed', height:'250%', width: '100%' })
          , { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('1.5s ease-in-out', style(
              { transform: 'translateY(-50%)', opacity: 0 }
            ))
          ], { optional: true }),
        ])
      ])
    ])
   ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
