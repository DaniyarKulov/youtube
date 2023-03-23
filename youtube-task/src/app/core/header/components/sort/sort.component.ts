import { Component, EventEmitter, Output } from '@angular/core';
import { SortEnum } from '../../../model/sort-enum.model';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  public sortByDateDirection = '';
  public sortByCountDirection = '';

  @Output() public searchEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Output() public sortEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  public changeDateDirection(): void {
    if (this.sortByDateDirection === '' || this.sortByDateDirection === SortEnum.dateDecrease) {
      this.sortEventEmitter.emit(SortEnum.dateDecrease);
      this.sortByDateDirection = SortEnum.dateIncrease;
      return;
    }
    this.sortEventEmitter.emit(SortEnum.dateIncrease);
    this.sortByDateDirection = SortEnum.dateDecrease;
  }

  public changeCountDirection(): void {
    if (this.sortByCountDirection === '' || this.sortByCountDirection === SortEnum.viewCountDecrease) {
      this.sortEventEmitter.emit(SortEnum.viewCountDecrease);
      this.sortByCountDirection = SortEnum.viewCountIncrease;
      return;
    }
    this.sortEventEmitter.emit(SortEnum.viewCountIncrease);
    this.sortByCountDirection = SortEnum.viewCountDecrease;
  }

  public searchDirection(event: string): void {
    this.searchEventEmitter.emit(event);
  }
}
