import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsUserGuard implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return !!localStorage.getItem('token') || this.router.createUrlTree(['auth']);
  }
}
