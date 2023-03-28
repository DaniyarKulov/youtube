import { Component, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../../../auth/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public isToggledChanged = new EventEmitter<boolean>();
  public username$ = this.loginService.username$;
  public isToggle: boolean = false;

  constructor(private loginService: LoginService) {}
  public logout(): void {
    this.loginService.logout();
  }

  public toggle(): void {
    this.isToggle = !this.isToggle;
    this.isToggledChanged.emit(this.isToggle);
  }
}
