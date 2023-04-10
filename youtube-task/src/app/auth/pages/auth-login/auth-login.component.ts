import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
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
      password: new FormControl<string | null>('', [
        Validators.required,
        Validators.minLength(8),
        this.containsUpperCaseAndLowerCase(),
        this.containsLettersAndNumbers(),
        this.containsLettersAndNumbers(),
        this.containsSpecialChar(),
      ]),
    });
  }

  public onLogin(): void {
    localStorage.setItem('token', this.loginForm.controls.email.value ?? '');
    this.loginService.setUsername(this.loginForm.controls.email.value ?? '');
    this.router.navigate(['/youtube']).catch();
  }
  public showPassword(): void {
    this.isPasswordHide = !this.isPasswordHide;
  }

  public get emailControl(): FormControl<string | null> {
    return this.loginForm.controls.email;
  }

  public get passControl(): FormControl<string | null> {
    return this.loginForm.controls.password;
  }

  public containsUpperCaseAndLowerCase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;
      const hasUpperLowercase = /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value);
      return !hasUpperLowercase ? { upperLowerCase: true } : null;
    };
  }

  public containsLettersAndNumbers(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;
      const hasNumAndLetters = /^(?=.*\d)(?=.*[a-zA-Z]).+$/.test(value);
      return !hasNumAndLetters ? { numAndLetters: true } : null;
    };
  }

  public containsSpecialChar(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;
      const hasSpecialChar = /[!@#?]/.test(value);
      return !hasSpecialChar ? { specialChar: true } : null;
    };
  }
}
