import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ResponseJsonService } from 'src/app/services/response-json.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  public items$ = this.res.getItems();
  public itemsSnippet = this.res.getItems().pipe(map((snipp) => snipp));
  constructor(private res: ResponseJsonService) {}
}
