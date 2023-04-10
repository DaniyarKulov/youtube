import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsUserGuard } from './auth/guards/is-user.guard';
import { isGuestGuard } from './auth/guards/is-guest.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube',
  },
  {
    path: 'auth',
    canActivate: [isGuestGuard],
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'youtube',
    canActivate: [IsUserGuard],
    loadChildren: () => import('./youtube/youtube.module').then((module) => module.YoutubeModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./core/add-card/add-card.module').then((module) => module.AddCardModule),
  },
  {
    path: '404',
    loadChildren: () => import('./errors/not-found/not-found.module').then((module) => module.NotFoundModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
