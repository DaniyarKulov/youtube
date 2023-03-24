import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { FormVideoItemComponent } from './components/form-video-item/form-video-item.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { BorderColorDirective } from './derectives/border-color.directive';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [YoutubeComponent, FormVideoItemComponent, SortPipe, BorderColorDirective, FilterPipe],
  imports: [CommonModule, MatButtonModule, MatIconModule, NgOptimizedImage, MatCardModule],
  exports: [YoutubeComponent],
})
export class YoutubeModule {}
