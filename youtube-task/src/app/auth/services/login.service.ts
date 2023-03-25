import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private authUserLogin$$ = new BehaviorSubject<string>('');
  public authUserLogin$ = this.authUserLogin$$.asObservable();

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.authUserLogin$$.next('');
  }

  public authUser(username: string): void {
    this.authUserLogin$$.next(username);
  }
}
