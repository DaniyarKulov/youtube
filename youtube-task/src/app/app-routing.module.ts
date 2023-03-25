import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isUserGuard } from './auth/guards/is-user.guard';
import { isGuestGuard } from './auth/guards/is-guest.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube',
  },
  {
    path: 'auth',
    canMatch: [isGuestGuard],
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'youtube',
    canMatch: [isUserGuard],

    loadChildren: () => import('./youtube/youtube.module').then((module) => module.YoutubeModule),
  },
  {
    path: '404',
    loadChildren: () => import('./core/not-found/not-found.module').then((module) => module.NotFoundModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
