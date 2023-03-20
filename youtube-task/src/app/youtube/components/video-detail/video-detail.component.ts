import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap, tap } from 'rxjs';
import { SearchItem } from 'src/app/core/model/search-item.model';
import { VideosHttpService } from 'src/app/shared/services/videos-http.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  public video!: SearchItem | undefined;
  private subs = new Subscription();

  constructor(private route: ActivatedRoute, private videosHttpService: VideosHttpService) {}

  public ngOnInit(): void {
    this.subs.add(
      this.route.paramMap
        .pipe(
          map((paramMap) => paramMap.get('id') ?? ''),
          switchMap((idFromRoute) =>
            this.videosHttpService.getItems().pipe(
              tap((videos) => {
                this.video = videos.find((video) => video.id === idFromRoute) ?? undefined;
              }),
            ),
          ),
        )
        .subscribe(),
    );
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public addVideo(): void {}
}
