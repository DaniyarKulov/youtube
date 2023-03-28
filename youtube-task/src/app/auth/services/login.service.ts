import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private username$$ = new BehaviorSubject<string>('');
  public username$ = this.username$$.asObservable();

  constructor(private router: Router) {}
  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.username$$.next('');
    this.router.navigate(['auth'], { replaceUrl: true }).catch();
  }

  public getUsername(username: string): void {
    this.username$$.next(username);
  }
}
