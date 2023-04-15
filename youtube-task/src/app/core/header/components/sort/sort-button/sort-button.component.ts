import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortButtonComponent {
  @Input() public sortType: null | string = null;
  @Output() public sortCriteriasState = new EventEmitter<number>();
  public sortDirection = 1;

  public changeDirection(): void {
    this.sortDirection *= -1;
    this.sortCriteriasState.emit(this.sortDirection);
  }
}
