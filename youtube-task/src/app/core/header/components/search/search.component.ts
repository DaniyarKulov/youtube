import { debounceTime, filter, switchMap, tap } from 'rxjs';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.searchContorl.valueChanges
      .pipe(
        debounceTime(800),
        filter((search: string | null) => (search ? search.length > 3 : search === '')),
        switchMap((search) =>
          this.videosHttpService
            .getVideos(search ?? '')
            .pipe(tap((items) => this.viewStateService.setVideos(items.items))),
        ),
      )
      .subscribe();
  }

  public get searchContorl(): FormControl<string | null> {
    return this.searchForm.controls.search;
  }

  public logout(): void {
    this.loginService.logout();
  }

  public toggle(): void {
    this.isToggle = !this.isToggle;
    this.isToggledChanged.emit(this.isToggle);
  }
}
