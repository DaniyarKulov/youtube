import { Component, EventEmitter, Output } from '@angular/core';

enum Sort {
  dateDecrease = 'dateDecrease',
  dateIncrease = 'dateIncrease',
  viewCountDecrease = 'viewCountDecrease',
  viewCountIncrease = 'viewCountIncrease',
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  public sortDate = '';
  public count = '';
  public isToggle = false;

  @Output()
  public searchedChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public sortChanged: EventEmitter<string> = new EventEmitter<string>();

  public changeVal(): void {
    if (this.sortDate === '' || this.sortDate === Sort.dateDecrease) {
      this.sortChanged.emit(Sort.dateDecrease);
      this.sortDate = Sort.dateIncrease;
      return;
    }
    this.sortChanged.emit(Sort.dateIncrease);
    this.sortDate = Sort.dateDecrease;
  }

  public changeValCount(): void {
    if (this.count === '' || this.count === Sort.viewCountDecrease) {
      this.sortChanged.emit(Sort.viewCountDecrease);
      this.count = Sort.viewCountIncrease;
      return;
    }
    this.sortChanged.emit(Sort.viewCountIncrease);
    this.count = Sort.viewCountDecrease;
  }

  public filterInputChange(event: string): void {
    this.searchedChange.emit(event);
  }
}
