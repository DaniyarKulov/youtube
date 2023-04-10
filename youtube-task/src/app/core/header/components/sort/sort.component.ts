import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SortCriterias } from '../../../../shared/sort-criterias.type';
import { SortVideosService } from '../../../services/sort-videos.service';
import { VideosService } from '../../../services/videos.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  @Output() public searchEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sortOrderChange: EventEmitter<string> = new EventEmitter<string>();
  public filterForm!: FormGroup<{ filter: FormControl<string | null> }>;

  constructor(private videosService: VideosService, private sortVideosService: SortVideosService) {}

  public ngOnInit(): void {
    this.filterForm = new FormGroup({
      filter: new FormControl<string | null>(''),
    });
    this.filterControl.valueChanges.subscribe((searchValue) => {
      this.videosService.changeFilterValue(searchValue ?? '');
    });
  }

  public sort(sortCriterias: SortCriterias): void {
    this.sortVideosService.changeSortValue(sortCriterias);
  }

  public get filterControl(): FormControl<string | null> {
    return this.filterForm.controls.filter;
  }
}
