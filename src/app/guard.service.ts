import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private router: Router) {}

  // if no navigation occured the user entered the url directly
  // so return false
  canActivate(): boolean {
    if(!this.router.navigated) {
      this.router.navigate(['welcome'])
    } else {
      return true;
    }
  }
}
