import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/core/model/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(value: SearchItem[] | null, input: string): SearchItem[] | null {
    return value
      ? value.filter((item) => item.snippet.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
      : [];
  }
}
