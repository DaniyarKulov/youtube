import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  public sortDate = '';
  public count = '';

  @Output()
  public searchedChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public sortChanged: EventEmitter<string> = new EventEmitter<string>();

  public changeVal(): void {
    if (this.sortDate === '' || this.sortDate === 'dateDecrease') {
      this.sortChanged.emit('dateDecrease');
      this.sortDate = 'dateIncrease';
      return;
    }
    this.sortChanged.emit('dateIncrease');
    this.sortDate = 'dateDecrease';
  }

  public changeValCount(): void {
    if (this.count === '' || this.count === 'viewCountDecrease') {
      this.sortChanged.emit('viewCountDecrease');
      this.count = 'viewCountIncrease';
      return;
    }
    this.sortChanged.emit('viewCountIncrease');
    this.count = 'viewCountDecrease';
  }

  public filterInputChange(event: string): void {
    this.searchedChange.emit(event);
  }
}
