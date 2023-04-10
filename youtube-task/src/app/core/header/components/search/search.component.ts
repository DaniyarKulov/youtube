import { debounceTime, filter, startWith, switchMap } from 'rxjs';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewStateService } from '../../../services/view-state.service';
import { LoginService } from '../../../../auth/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
  @Output() public isToggledChanged = new EventEmitter<boolean>();
  public username$ = this.loginService.username$;
  public isVisibleSortComponent: boolean = false;
  public searchForm!: FormGroup<{ search: FormControl<string | null> }>;

  constructor(private loginService: LoginService, private viewStateService: ViewStateService) {}

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl<string | null>('', [Validators.maxLength(250)]),
    });
    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(800),
        filter((search: string | null) => (search ? search.length > 3 : search === '')),
        switchMap((search) => this.viewStateService.getVideos(search ?? '')),
      )
      .subscribe();
  }

  public get searchControl(): FormControl<string | null> {
    return this.searchForm.controls.search;
  }

  public logout(): void {
    this.loginService.logout();
  }

  public changeVisibility(): void {
    this.isVisibleSortComponent = !this.isVisibleSortComponent;
    this.isToggledChanged.emit(this.isVisibleSortComponent);
  }
}
