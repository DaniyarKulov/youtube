import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../model/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class ViewStateService {
  private sort$$ = new BehaviorSubject<string>('');
  private search$$ = new BehaviorSubject<string>('');
  public sort$ = this.sort$$.asObservable();
  public search$ = this.search$$.asObservable();
  private videos$$ = new BehaviorSubject<SearchItem[]>([]);
  public videos$ = this.videos$$.asObservable();

  public changeValue(value: string): void {
    this.sort$$.next(value);
  }

  public changeSearchValue(value: string): void {
    this.search$$.next(value);
  }

  public setVideos(item: SearchItem[]): void {
    this.videos$$.next(item);
  }
}
