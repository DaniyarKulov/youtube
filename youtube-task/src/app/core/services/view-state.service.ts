import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { SearchItem } from '../model/search-item.model';
import { SortDirection } from '../constans/sort-direction.model';

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
  public getSortedVideos(sortBy: string): void {
    this.videos$$
      .pipe(
        map((videos) => {
          if (sortBy === SortDirection.viewCountDecrease) {
            videos?.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
          }
          if (sortBy === SortDirection.viewCountIncrease) {
            videos?.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
          }
          if (sortBy === SortDirection.dateDecrease) {
            videos?.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
          }
          if (sortBy === SortDirection.dateIncrease) {
            videos?.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
          }
          return videos;
        }),
      )
      .subscribe();
  }
}
