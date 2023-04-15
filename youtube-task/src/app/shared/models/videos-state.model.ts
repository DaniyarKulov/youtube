import { AddVideo, SearchItem } from '../../core/model/search-item.model';

export interface VideosState {
  videos: SearchItem[];
  video: AddVideo[];
  error: string | null;
  isLoading: boolean;
}
