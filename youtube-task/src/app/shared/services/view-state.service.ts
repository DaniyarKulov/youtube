import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewStateService {
  private sort$$ = new BehaviorSubject<string>('');
  private search$$ = new BehaviorSubject<string>('');
  public sort$ = this.sort$$.asObservable();
  public search$ = this.search$$.asObservable();

  public changeValue(value: string): void {
    this.sort$$.next(value);
  }

  public changeSearchValue(value: string): void {
    this.search$$.next(value);
  }
}
