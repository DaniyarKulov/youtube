import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VideosState } from '../shared/models/videos-state.model';

const selectVideosFeature = createFeatureSelector<VideosState>('videos');

export const selectVideos = createSelector(selectVideosFeature, (videosState) => videosState.videos);
export const selectAddVideo = createSelector(selectVideosFeature, (videosState) => videosState.creatVideo);
export const selectError = createSelector(selectVideosFeature, (videosState) => videosState.error);
export const selectIsLoading = createSelector(selectVideosFeature, (videosState) => videosState.isLoading);
