import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { FormVideoItemComponent } from './components/form-video-item/form-video-item.component';

@NgModule({
  declarations: [YoutubeComponent, FormVideoItemComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [YoutubeComponent],
})
export class YoutubeModule {}
