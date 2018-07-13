import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { WaitingComponent } from './waiting/waiting.component';
import { ResultsComponent } from './results/results.component';
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
    data: { state: 'waiting'}
  },
  {
    path: 'results',
    component: ResultsComponent,
    data: { state: 'results'}
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
