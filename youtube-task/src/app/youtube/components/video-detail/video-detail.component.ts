import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { SearchItem } from 'src/app/core/model/search-item.model';
import { VideosHttpService } from 'src/app/shared/services/videos-http.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent implements OnInit {
  public video!: SearchItem | null;

  constructor(private route: ActivatedRoute, private videosHttpService: VideosHttpService) {}

  public ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.videosHttpService
      .getItems()
      .pipe(
        tap((item) => {
          this.video = item.find((v) => v.id === routeParams.get('id')) ?? null;
        }),
      )
      .subscribe();
  }
}
