import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  public logoutRedirect(): void {
    this.loginService.logout();
    this.router.navigate(['auth'], { replaceUrl: true }).catch();
  }
}
