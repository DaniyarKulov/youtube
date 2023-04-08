import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortByDateByViewService {
  private sort$$ = new BehaviorSubject<string>('');
  public sort$ = this.sort$$.asObservable();

  public changeSortValue(value: string): void {
    this.sort$$.next(value);
  }
}
