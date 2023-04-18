import { createReducer, on } from '@ngrx/store';
import { addVideo, getVideos, getVideosFailure, getVideosSuccess } from './get-videos.actions';
import { VideosState } from '../shared/models/videos-state.model';

const initialVideosState: VideosState = {
  videos: [],
  creatVideo: [],
  error: null,
  isLoading: false,
};

export const videosReducers = createReducer(
  initialVideosState,
  on(
    getVideos,
    (state): VideosState => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    getVideosSuccess,
    (state, action): VideosState => ({
      ...state,
      videos: action.videos,
      isLoading: false,
    }),
  ),
  on(
    getVideosFailure,
    (state, action): VideosState => ({
      ...state,
      error: action.error,
      isLoading: false,
    }),
  ),
  on(
    addVideo,
    (state, action): VideosState => ({
      ...state,
      creatVideo: [...state.creatVideo, action.video],
    }),
  ),
);
