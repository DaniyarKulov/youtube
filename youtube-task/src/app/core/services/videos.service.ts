import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectVideos } from '../../store/videos.selectors';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private filter$$ = new BehaviorSubject<string>('');
  public filter$ = this.filter$$.asObservable();
  public videos$ = combineLatest([this.store.select(selectVideos), this.filter$]).pipe(
    map(([videos, filterValue]) =>
      videos.filter((video) => video.snippet.title.toLowerCase().includes(filterValue.toLowerCase())),
    ),
  );
  constructor(private store: Store) {}

  public changeFilterValue(searchValue: string): void {
    this.filter$$.next(searchValue);
  }
}
