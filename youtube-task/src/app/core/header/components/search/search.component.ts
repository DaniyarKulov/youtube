import { combineLatest, debounceTime, filter, map, startWith, switchMap, tap, withLatestFrom } from 'rxjs';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchItem } from '../../../model/search-item.model';
import { SortDirection } from '../../../constans/sort-direction.model';
import { ViewStateService } from '../../../services/view-state.service';
import { VideosHttpService } from '../../../services/videos-http.service';
import { LoginService } from '../../../../auth/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() public isToggledChanged = new EventEmitter<boolean>();
  public username$ = this.loginService.username$;
  public isToggle: boolean = false;
  public searchForm!: FormGroup<{ search: FormControl<string | null> }>;

  constructor(
    private loginService: LoginService,
    private videosHttpService: VideosHttpService,
    private viewStateService: ViewStateService,
  ) {}

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl<string | null>('', [Validators.maxLength(250)]),
    });
    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(800),
        filter((search: string | null) => (search ? search.length > 3 : search === '')),
        switchMap((search) =>
          this.videosHttpService
            .getVideos(search ?? '')
            .pipe(tap((videos) => this.viewStateService.setVideos(videos.items))),
        ),
      )
      .subscribe();

    combineLatest([this.viewStateService.sort$, this.viewStateService.videos$])
      .pipe(
        map(([sort, videos]) => {
          this.sortVideos(sort, videos);
        }),
      )
      .subscribe();
  }

  public get searchControl(): FormControl<string | null> {
    return this.searchForm.controls.search;
  }

  public logout(): void {
    this.loginService.logout();
  }

  public toggle(): void {
    this.isToggle = !this.isToggle;
    this.isToggledChanged.emit(this.isToggle);
  }

  private sortVideos(sortBy: string, videos: SearchItem[]): SearchItem[] {
    if (sortBy === SortDirection.viewCountDecrease) {
      videos?.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    }
    if (sortBy === SortDirection.viewCountIncrease) {
      videos?.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
    if (sortBy === SortDirection.dateDecrease) {
      videos?.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    }
    if (sortBy === SortDirection.dateIncrease) {
      videos?.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    }
    return videos;
  }
}
