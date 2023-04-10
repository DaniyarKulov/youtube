import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, combineLatest, tap } from 'rxjs';
import { SortCriterias } from '../../../shared/sort-criterias.type';
import { SortVideosService } from '../../../core/services/sort-videos.service';
import { VideosService } from '../../../core/services/videos.service';
import { SearchItem } from '../../../core/model/search-item.model';
import { SortDirection } from '../../../core/constans/sort-direction.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit, OnDestroy {
  public viewCount = String(SortDirection.viewCountDecrease);
  public videos: SearchItem[] = [];
  public sortOptions: SortCriterias | null = null;
  private subs = new Subscription();

  constructor(private sortVideosService: SortVideosService, private videosService: VideosService) {}

  public ngOnInit(): void {
    this.subs.add(
      combineLatest([this.videosService.videos$, this.sortVideosService.sort$])
        .pipe(
          tap(([videos, sort]) => {
            this.videos = videos;
            this.sortOptions = sort;
          }),
        )
        .subscribe(),
    );
  }

  public trackById(_: number, item: SearchItem): string {
    return item.id;
  }
  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
