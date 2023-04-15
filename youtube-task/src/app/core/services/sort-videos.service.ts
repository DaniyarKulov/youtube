import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortCriterias } from '../../shared/sort-criterias.type';

@Injectable({
  providedIn: 'root',
})
export class SortVideosService {
  private sort$$ = new BehaviorSubject<SortCriterias>({ type: 'views', direction: 1 });
  public sort$ = this.sort$$.asObservable();

  public changeSortValue(sortCriteria: SortCriterias): void {
    this.sort$$.next(sortCriteria);
  }
}
