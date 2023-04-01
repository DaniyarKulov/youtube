import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { SearchResponse } from '../model/search-response.model';
import { Video } from '../model/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class VideosHttpService {
  constructor(private http: HttpClient) {}

  public getVideos(searchValue: string): Observable<Video> {
    return this.http
      .get<SearchResponse>('search', {
        params: {
          type: 'video',
          maxResults: 16,
          q: searchValue,
        },
      })
      .pipe(
        switchMap((videosFromAPI) => {
          const videoIds: string = videosFromAPI.items.map((video) => video.id.videoId).join(',');
          return this.getVideosById(videoIds);
        }),
      );
  }

  public getVideosById(id: string): Observable<Video> {
    return this.http.get<Video>('videos', {
      params: {
        id,
        part: 'snippet,statistics',
      },
    });
  }
}
