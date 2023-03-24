import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public isToggledChanged = new EventEmitter<boolean>();

  public isToggle: boolean = false;

  public toggle(): void {
    this.isToggle = !this.isToggle;
    this.isToggledChanged.emit(this.isToggle);
  }
}
