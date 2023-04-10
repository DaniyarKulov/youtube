import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortCriterias } from '../../../../../shared/sort-criterias.type';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortButtonComponent implements OnInit {
  @Output() public sortCriteriasState = new EventEmitter<SortCriterias>();
  @Input() public sortType = '';
  public sortState: SortCriterias = { type: '', direction: 1 };

  public ngOnInit(): void {
    this.sortState.type = this.sortType;
  }
  public sortCriteriasChange(criteriasValue: string): void {
    this.sortType = criteriasValue;
  }

  public changeDirection(): void {
    this.sortState.direction *= -1;
    this.sortCriteriasState.emit(this.sortState);
  }
}
