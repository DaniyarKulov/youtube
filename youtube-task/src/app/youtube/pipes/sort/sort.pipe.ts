import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../../core/model/search-item.model';
import { SortEnum } from '../../../core/model/sort-enum.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public transform(value: SearchItem[] | null, viewSort: string): SearchItem[] | null {
    if (viewSort === SortEnum.viewCountDecrease) {
      value?.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    }
    if (viewSort === SortEnum.viewCountIncrease) {
      value?.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
    if (viewSort === SortEnum.dateDecrease) {
      value?.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    }
    if (viewSort === SortEnum.dateIncrease) {
      value?.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    }
    return value;
  }
}
