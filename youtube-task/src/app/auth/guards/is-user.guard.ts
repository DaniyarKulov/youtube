import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

export const isUserGuard = (): boolean | UrlTree => {
  const router = inject(Router);
  return localStorage.getItem('token') ? true : router.createUrlTree(['auth']);
};
