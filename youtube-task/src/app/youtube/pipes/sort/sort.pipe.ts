import { Pipe, PipeTransform } from '@angular/core';
import { SortCriterias } from '../../../shared/sort-criterias.type';
import { sortMap } from '../../../core/constans/sort-map.model';
import { SearchItem } from '../../../core/model/search-item.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public transform(videos: SearchItem[] | null, sortCriterias: SortCriterias | null): SearchItem[] | null {
    return videos && sortCriterias
      ? videos.sort((a, b) => sortMap[sortCriterias.type](a, b) * sortCriterias.direction)
      : videos ?? [];
  }
}
