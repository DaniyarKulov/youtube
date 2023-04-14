import { createAction, props } from '@ngrx/store';
import { SearchItem } from '../core/model/search-item.model';

export const getVideos = createAction('[GetVideos] Load GetVideoss', props<{ searchValue: string }>());

export const getVideosSuccess = createAction('[GetVideos] Load GetVideoss Success', props<{ videos: SearchItem[] }>());

export const getVideosFailure = createAction('[GetVideos] Load GetVideoss Failure', props<{ error: string | null }>());
