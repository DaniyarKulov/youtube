import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { ViewStateService } from './view-state.service';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private filter$$ = new BehaviorSubject<string>('');
  public filter$ = this.filter$$.asObservable();
  public videos$ = combineLatest([this.viewStateService.videos$, this.filter$]).pipe(
    map(([videos, filterValue]) =>
      videos.filter((video) => video.snippet.title.toLowerCase().includes(filterValue.toLowerCase())),
    ),
  );
  constructor(private viewStateService: ViewStateService) {}
  public changeFilterValue(searchValue: string): void {
    this.filter$$.next(searchValue);
  }
}
