import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public isToggle: boolean = false;
  @Output()
  public isToggledChanged = new EventEmitter<boolean>();

  public toggle(): void {
    this.isToggle = !this.isToggle;
    this.isToggledChanged.emit(this.isToggle);
  }
}
