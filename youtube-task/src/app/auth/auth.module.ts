import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { AuthPagesComponent } from './pages/auth-pages/auth-pages.component';



@NgModule({
  declarations: [
    AuthComponent,
    AuthPagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
