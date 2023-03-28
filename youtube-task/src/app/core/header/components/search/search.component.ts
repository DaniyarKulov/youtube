import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public username$ = this.loginService.username$;

  constructor(private loginService: LoginService) {}

  public logout(): void {
    this.loginService.logout();
  }
}
