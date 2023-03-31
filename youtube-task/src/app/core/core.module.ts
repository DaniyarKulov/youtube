import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/components/header/header.component';

@NgModule({
  imports: [CommonModule, HeaderModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
