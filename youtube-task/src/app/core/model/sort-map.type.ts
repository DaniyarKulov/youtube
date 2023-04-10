import { SearchItem } from './search-item.model';

export type SortMap = Record<string, (a: SearchItem, b: SearchItem) => number>;
