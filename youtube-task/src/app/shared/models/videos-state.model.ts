import { SearchItem } from '../../core/model/search-item.model';

export interface VideosState {
  videos: SearchItem[];
  error: string | null;
  isLoading: boolean;
}
