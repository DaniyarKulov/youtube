import { SortMap } from '../model/sort-map.type';

export const sortMap: SortMap = {
  view: (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
  date: (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
};
