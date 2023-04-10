import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortButtonComponent {
  @Output() public sortCriteriasState = new EventEmitter<number>();
  @Input() public sortType = '';
  public sortDirection = 1;

  public changeDirection(): void {
    this.sortDirection *= -1;
    this.sortCriteriasState.emit(this.sortDirection);
  }
}
