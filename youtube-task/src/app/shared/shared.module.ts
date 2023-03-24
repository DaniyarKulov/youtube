import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';

@NgModule({
  declarations: [FooterComponent, NotFoundPageComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class SharedModule {}
