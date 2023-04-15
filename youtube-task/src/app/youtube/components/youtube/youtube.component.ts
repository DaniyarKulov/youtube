import { Component } from '@angular/core';
import { SortVideosService } from '../../../core/services/sort-videos.service';
import { VideosService } from '../../../core/services/videos.service';
import { SearchItem } from '../../../core/model/search-item.model';
import { SortDirection } from '../../../core/constans/sort-direction.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  public viewCount = String(SortDirection.viewCountDecrease);
  public videos$ = this.videosService.videos$;
  public sortOptions$ = this.sortVideosService.sort$;
  constructor(private sortVideosService: SortVideosService, private videosService: VideosService) {}

  public trackById(_: number, item: SearchItem): string {
    return item.id;
  }
}
