import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit {
  public isPasswordHide = true;
  public loginForm!: FormGroup<{ email: FormControl<string | null>; password: FormControl<string | null> }>;

  constructor(private router: Router, private loginService: LoginService) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl<string | null>('', [Validators.required, Validators.email]),
      password: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
    });
  }

  public onLogin(): void {
    localStorage.setItem('token', this.loginForm.controls.email.value ?? '');
    this.loginService.authUser(this.loginForm.controls.email.value ?? '');
    this.router.navigate(['/youtube']).catch();
  }

  public showPassword(): void {
    this.isPasswordHide = !this.isPasswordHide;
  }
}
