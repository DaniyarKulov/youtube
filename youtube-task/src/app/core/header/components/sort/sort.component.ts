import { Component, EventEmitter, Output } from '@angular/core';
import { SortDirection } from '../../../model/sort-enum.model';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  public sortByDateDirection = '';
  public sortByCountDirection = '';

  @Output() public searchEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Output() public sortOrderChange: EventEmitter<string> = new EventEmitter<string>();

  public changeDateDirection(): void {
    if (this.sortByDateDirection === '' || this.sortByDateDirection === SortDirection.dateDecrease) {
      this.sortOrderChange.emit(SortDirection.dateDecrease);
      this.sortByDateDirection = SortDirection.dateIncrease;
      return;
    }
    this.sortOrderChange.emit(SortDirection.dateIncrease);
    this.sortByDateDirection = SortDirection.dateDecrease;
  }

  public changeSortByCountDirection(): void {
    if (this.sortByCountDirection === '' || this.sortByCountDirection === SortDirection.viewCountDecrease) {
      this.sortOrderChange.emit(SortDirection.viewCountDecrease);
      this.sortByCountDirection = SortDirection.viewCountIncrease;
      return;
    }
    this.sortOrderChange.emit(SortDirection.viewCountIncrease);
    this.sortByCountDirection = SortDirection.viewCountDecrease;
  }

  public searchDirection(event: string): void {
    this.searchEventEmitter.emit(event);
  }
}
