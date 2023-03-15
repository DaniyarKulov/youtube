import { SearchItem } from 'src/app/core/model/search-item.model';
import { Pipe, PipeTransform } from '@angular/core';
import { ResponseJsonService } from 'src/app/services/response-json.service';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public sbj = this.res.sbj$;
  constructor(private res: ResponseJsonService) {}
  public transform(value: SearchItem[] | null, test: string): SearchItem[] | null {
    if (test === 'viewCountDecrease') {
      value?.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    }
    if (test === 'viewCountIncrease') {
      value?.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
    if (test === 'dateDecrease') {
      value?.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    }
    if (test === 'dateIncrease') {
      value?.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    }
    return value;
  }

  public subItem(): void {
    this.sbj.subscribe({
      next(num) {
        console.log(`1st subscribe: ${num}`);
      },
    });
  }
}
