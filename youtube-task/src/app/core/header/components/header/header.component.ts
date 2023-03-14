import { Component, OnInit } from '@angular/core';
import { ResponseJsonService } from 'src/app/services/response-json.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public items$ = this.res.getItems();

  constructor(private res: ResponseJsonService) {}

  public ngOnInit(): void {
    this.res.getItems();
  }
}
