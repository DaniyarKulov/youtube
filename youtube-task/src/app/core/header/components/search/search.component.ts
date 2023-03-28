import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
 @Output() public isToggledChanged = new EventEmitter<boolean>();
   public username$ = this.loginService.username$;
  public isToggle: boolean = false;
  
  constructor(private loginService: LoginService, private router: Router) {}
  public logout(): void {
    this.loginService.logout();


  public toggle(): void {
    this.isToggle = !this.isToggle;
    this.isToggledChanged.emit(this.isToggle);
  }
}
