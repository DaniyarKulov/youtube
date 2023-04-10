import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthComponent],
})
export class AuthModule {}
