import { catchError, map, switchMap, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getVideos, getVideosFailure, getVideosSuccess } from './get-videos.actions';
import { VideosHttpService } from '../core/services/videos-http.service';

@Injectable()
export class VideosEffects {
  public getVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getVideos),
      switchMap((action) =>
        this.videosHttpService.getVideos(action.searchValue).pipe(
          map((videosResponse) => getVideosSuccess({ videos: videosResponse.items })),
          catchError((error) => of(getVideosFailure({ error: error.message }))),
        ),
      ),
    );
  });
  constructor(private actions$: Actions, private videosHttpService: VideosHttpService) {}
}
