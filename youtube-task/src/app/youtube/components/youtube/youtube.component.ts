import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, tap } from 'rxjs';
import { ResponseJsonService } from 'src/app/services/response-json.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit, OnDestroy {
  public items$ = this.res.getItems();
  public itemsSnippet = this.res.getItems().pipe(map((snipp) => snipp));
  public test$ = 'viewCountDecrease';
  private subs = new Subscription();
  constructor(private res: ResponseJsonService) {}

  public ngOnInit(): void {
    this.subs.add(
      this.res.sbj$
        .pipe(
          tap((item) => {
            this.test$ = item;
          }),
        )
        .subscribe(),
    );
  }
  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
