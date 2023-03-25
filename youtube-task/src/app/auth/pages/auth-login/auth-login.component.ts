import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent implements OnInit {
  public isPasswordHide = true;
  public loginForm!: FormGroup;
  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  public onLogin(): void {
    if (this.loginForm.valid) {
      localStorage.setItem('token', 'asdasdasda');
      this.router.navigate(['/youtube']).catch();
    }
  }

  public onPasswordHide(): void {
    this.isPasswordHide = !this.isPasswordHide;
  }
}
