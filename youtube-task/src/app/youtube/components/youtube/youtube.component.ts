import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ResponseJsonService } from 'src/app/services/response-json.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  items$ = this.res.getItems();
  itemsSnippet = this.res.getItems().pipe(map((snipp) => snipp));
  constructor(private res: ResponseJsonService) {}
}
