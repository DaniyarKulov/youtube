import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VideosService } from '../../../services/videos.service';
import { SortDirection } from '../../../constans/sort-direction.model';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  @Output() public searchEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sortOrderChange: EventEmitter<string> = new EventEmitter<string>();
  public sortByDateDirection = '';
  public sortByCountDirection = '';
  public filterForm!: FormGroup<{ filter: FormControl<string | null> }>;

  constructor(private videosService: VideosService) {}

  public ngOnInit(): void {
    this.filterForm = new FormGroup({
      filter: new FormControl<string | null>(''),
    });
    this.filterControl.valueChanges.subscribe((searchValue) => {
      this.videosService.changeSortValue(searchValue ?? '');
    });
  }

  public get filterControl(): FormControl<string | null> {
    return this.filterForm.controls.filter;
  }

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
