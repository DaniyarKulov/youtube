import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
  },
  {
    path: ':id',
    component: VideoDetailComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class YoutubeRoutingModuleModule {}
