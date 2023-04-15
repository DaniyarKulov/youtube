import { SortMap } from '../model/sort-map.type';

export const sortMap: SortMap = {
  views: (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
  data: (a, b) => +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt),
};
