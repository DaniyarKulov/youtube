import { Component, Input } from '@angular/core';
import { ViewStateService } from '../../../services/view-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public isSortAvailable: boolean = false;

  constructor(private viewStateService: ViewStateService) {}

  public searchValueChange(searchValue: string): void {
    this.viewStateService.changeSearchValue(searchValue);
  }

  public onSortOrderChange(sortValue: string): void {
    this.viewStateService.getSortedVideos(sortValue);
  }

  public toggleSortingAvailability(isSortAvailable: boolean): void {
    this.isSortAvailable = isSortAvailable;
  }
}
