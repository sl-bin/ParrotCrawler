import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { GuardService } from './guard.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { WaitingComponent } from './waiting/waiting.component';
import { ResultsComponent } from './results/results.component';
import { ErrorComponent } from './error/error.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { state: 'welcome'}
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home'}
  },
  {
    path: 'waiting',
    component: WaitingComponent,
    // canActivate: [GuardService],
    data: { state: 'waiting'}
  },
  {
    path: 'results',
    component: ResultsComponent,
    // canActivate: [GuardService],
    data: { state: 'results'}
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: { state: 'error'}
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});
