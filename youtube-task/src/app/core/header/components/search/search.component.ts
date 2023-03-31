import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../../../auth/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public isSortComponentChange = new EventEmitter<boolean>();
  public username$ = this.loginService.username$;
  public isSortComponent: boolean = false;

  constructor(private loginService: LoginService) {}
  public logout(): void {
    this.loginService.logout();
  }

  public onSortComponent(): void {
    this.isSortComponent = !this.isSortComponent;
    this.isSortComponentChange.emit(this.isSortComponent);
  }
}
