import { Component, Input } from '@angular/core';
import { ViewStateService } from 'src/app/shared/services/view-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  public toggleSort: boolean = false;

  constructor(private viewStateService: ViewStateService) {}

  public searchValueChange(searchValue: string): void {
    this.viewStateService.changeSearchValue(searchValue);
  }

  public sortValueChange(sortValue: string): void {
    this.viewStateService.changeValue(sortValue);
  }

  public toggleChange(bool: boolean): void {
    this.toggleSort = bool;
  }
}
