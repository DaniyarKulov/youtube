import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'youtube',
    canActivate: [AuthGuard],
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
