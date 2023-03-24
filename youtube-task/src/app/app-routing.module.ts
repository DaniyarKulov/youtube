import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NotFoundPageComponent } from './shared/layout/not-found-page/not-found-page.component';

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
    loadChildren: () => import('./youtube/youtube.module').then((module) => module.YoutubeModule),
  },
  // { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
