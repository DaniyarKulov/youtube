import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { SearchItem } from 'src/app/core/model/search-item.model';
import { VideosHttpService } from 'src/app/shared/services/videos-http.service';
import { ViewStateService } from 'src/app/shared/services/view-state.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit, OnDestroy {
  public items$ = this.videosHttpService.getItems();
  public test$ = 'viewCountDecrease';
  public search = '';
  private subs = new Subscription();

  constructor(private res: ViewStateService, private videosHttpService: VideosHttpService) {}

  public ngOnInit(): void {
    this.subs.add(
      this.res.sort$
        .pipe(
          tap((item) => {
            this.test$ = item;
          }),
        )
        .subscribe(),
    );

    this.subs.add(
      this.res.search$
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
