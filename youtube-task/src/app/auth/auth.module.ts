import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [AuthComponent],
})
export class AuthModule {}
