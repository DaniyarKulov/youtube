import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { ViewStateService } from '../../../core/services/view-state.service';
import { VideosHttpService } from '../../../core/services/videos-http.service';
import { SortDirection } from '../../../core/constans/sort-direction.model';
import { SearchItem } from '../../../core/model/search-item.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit, OnDestroy {
  public items$ = this.videosHttpService.getItems();
  public viewCount = String(SortDirection.viewCountDecrease);
  public search = '';
  private subs = new Subscription();

  constructor(private viewStateService: ViewStateService, private videosHttpService: VideosHttpService) {}

  public ngOnInit(): void {
    this.subs.add(
      this.viewStateService.sort$
        .pipe(
          tap((item) => {
            this.viewCount = item;
          }),
        )
        .subscribe(),
    );

    this.subs.add(
      this.viewStateService.search$
        .pipe(
          tap((item) => {
            this.search = item;
          }),
        )
        .subscribe(),
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public trackById(_: number, item: SearchItem): string {
    return item.id;
  }
}
