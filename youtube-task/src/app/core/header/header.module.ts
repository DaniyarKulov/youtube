import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, SortComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, SearchComponent],
})
export class HeaderModule {}
