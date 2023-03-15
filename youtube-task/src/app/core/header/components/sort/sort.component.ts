import { Component, OnInit } from '@angular/core';
import { ResponseJsonService } from 'src/app/services/response-json.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  public sortDate = '';
  public count = '';
  constructor(private res: ResponseJsonService) {}
  public ngOnInit(): void {
    console.log();
  }
  public changeVal(): void {
    if (this.sortDate === '' || this.sortDate === 'dateDecrease') {
      this.res.changeValue('dateDecrease');
      this.sortDate = 'dateIncrease';
      return;
    }
    this.res.changeValue('dateIncrease');
    this.sortDate = 'dateDecrease';
  }
  public changeValCount(): void {
    if (this.count === '' || this.count === 'viewCountDecrease') {
      this.res.changeValue('viewCountDecrease');
      this.count = 'viewCountIncrease';
      return;
    }
    this.res.changeValue('viewCountIncrease');
    this.count = 'viewCountDecrease';
  }
}
