import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

export const isGuestGuard = (): boolean | UrlTree => {
  const router = inject(Router);
  return !localStorage.getItem('token') || router.createUrlTree(['youtube']);
};
