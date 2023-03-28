import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SortComponent } from './components/sort/sort.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [HeaderComponent, SortComponent, SearchComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
