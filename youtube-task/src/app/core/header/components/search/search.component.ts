import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
 @Output() public isToggledChanged = new EventEmitter<boolean>();
  public username$ = this.loginService.authUserLogin$;
  public isToggle: boolean = false;
  
  constructor(private loginService: LoginService, private router: Router) {}
  public logoutRedirect(): void {
    this.loginService.logout();
    this.router.navigate(['auth'], { replaceUrl: true }).catch();

  public toggle(): void {
    this.isToggle = !this.isToggle;
    this.isToggledChanged.emit(this.isToggle);
  }
}
