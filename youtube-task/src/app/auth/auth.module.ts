import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthPagesComponent } from './pages/auth-pages/auth-pages.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPagesComponent,
  },
];

@NgModule({
  declarations: [AuthComponent, AuthPagesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
