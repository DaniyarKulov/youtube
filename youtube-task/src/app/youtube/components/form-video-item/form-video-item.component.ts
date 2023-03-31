import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../../core/model/search-item.model';

interface StatiscticsInfo {
  icon: string;
  date: SearchItem;
}

@Component({
  selector: 'app-form-video-item',
  templateUrl: './form-video-item.component.html',
  styleUrls: ['./form-video-item.component.scss'],
})
export class FormVideoItemComponent implements OnInit {
  @Input() public video!: SearchItem;

  public statiscticsInfo: StatiscticsInfo[] = [];
  private videoStatistics: SearchItem[] = [];
  private iconsArr: string[] = ['visibility', 'thumb_up', 'thumb_down', 'favorite', 'forum'];

  public ngOnInit(): void {
    this.videoStatistics = Object.values(this.video?.statistics ?? []);
    this.iconsArr.forEach((item, i) => {
      this.statiscticsInfo.push({ icon: item, date: this.videoStatistics[i] });
    });
  }

  public trackByIndex(index: number): number {
    return index;
  }
}
