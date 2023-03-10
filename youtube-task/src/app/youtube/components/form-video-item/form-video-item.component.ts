import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/core/model/search-item.model';

@Component({
  selector: 'app-form-video-item',
  templateUrl: './form-video-item.component.html',
  styleUrls: ['./form-video-item.component.scss'],
})
export class FormVideoItemComponent implements OnInit {
  @Input() item!: Item;
  arr: Item[] = [];
  statisctics: { icon: string; date: Item }[] = [];
  iconsArr: string[] = ['visibility', 'thumb_up', 'thumb_down', 'favorite', 'forum'];

  ngOnInit(): void {
    this.arr = Object.values(this.item?.statistics ?? []);
    this.iconsArr.forEach((item, i) => {
      this.statisctics.push({ icon: item, date: this.arr[i] });
    });
  }
}
