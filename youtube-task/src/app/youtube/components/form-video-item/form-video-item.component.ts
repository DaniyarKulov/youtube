import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/core/model/search-item.model';

@Component({
  selector: 'app-form-video-item',
  templateUrl: './form-video-item.component.html',
  styleUrls: ['./form-video-item.component.scss'],
})
export class FormVideoItemComponent implements OnInit {
  @Input() public video!: SearchItem;
  private videoStatistics: SearchItem[] = [];
  public statiscticsAndIcons: { icon: string; date: SearchItem }[] = [];
  private iconsArr: string[] = ['visibility', 'thumb_up', 'thumb_down', 'favorite', 'forum'];

  public ngOnInit(): void {
    this.videoStatistics = Object.values(this.video?.statistics ?? []);
    this.iconsArr.forEach((item, i) => {
      this.statiscticsAndIcons.push({ icon: item, date: this.videoStatistics[i] });
    });
  }

  public trackByIndex(index: number): number {
    return index;
  }
}
