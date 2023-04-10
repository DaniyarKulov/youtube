import { Component, Input } from '@angular/core';
import { SortVideosService } from '../../../services/sort-videos.service';
import { ViewStateService } from '../../../services/view-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public isSortAvailable: boolean = false;

  constructor(private viewStateService: ViewStateService, private sortVideosService: SortVideosService) {}

  public searchValueChange(searchValue: string): void {
    this.viewStateService.changeSearchValue(searchValue);
  }

  public toggleSortingAvailability(isSortAvailable: boolean): void {
    this.isSortAvailable = isSortAvailable;
  }
}
