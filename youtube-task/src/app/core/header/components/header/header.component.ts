import { Component } from '@angular/core';
import { ViewStateService } from 'src/app/services/view-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private viewStateService: ViewStateService) {}
  public searchValueChange(searchValue: string): void {
    this.viewStateService.changeSearchValue(searchValue);
  }
  public sortValueChange(sortValue: string): void {
    this.viewStateService.changeValue(sortValue);
  }
}
