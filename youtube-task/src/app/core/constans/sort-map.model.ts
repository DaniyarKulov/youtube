import { SortMap } from '../model/sort-map.type';

export const sortMap: SortMap = {
  views: (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
  data: (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
};
