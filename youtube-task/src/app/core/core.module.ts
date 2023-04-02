import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AddCardModule } from './add-card/add-card.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, AddCardModule],
  exports: [HeaderComponent, SharedModule],
})
export class CoreModule {}
