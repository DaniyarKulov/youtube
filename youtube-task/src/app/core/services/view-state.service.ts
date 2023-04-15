import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SearchItem, Video } from '../model/search-item.model';
import { VideosHttpService } from './videos-http.service';

@Injectable({
  providedIn: 'root',
})
export class ViewStateService {
  private search$$ = new BehaviorSubject<string>('');
  public search$ = this.search$$.asObservable();
  private videos$$ = new BehaviorSubject<SearchItem[]>([]);
  public videos$ = this.videos$$.asObservable();

  constructor(private videosHttpService: VideosHttpService) {}

  public changeSearchValue(value: string): void {
    this.search$$.next(value);
  }

  public setVideos(item: SearchItem[]): void {
    this.videos$$.next(item);
  }

  public getVideos(searchValue: string): Observable<Video> {
    return this.videosHttpService
      .getVideos(searchValue)
      .pipe(tap((searchResponse) => this.videos$$.next(searchResponse.items)));
  }
}
