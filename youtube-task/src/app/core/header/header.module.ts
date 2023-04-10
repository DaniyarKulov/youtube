import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SortComponent } from './components/sort/sort.component';
import { SearchComponent } from './components/search/search.component';
import { SortButtonComponent } from './components/sort/sort-button/sort-button.component';
import { AddCardModule } from '../add-card/add-card.module';

@NgModule({
  declarations: [HeaderComponent, SortComponent, SearchComponent, SortButtonComponent],
  imports: [CommonModule, SharedModule, AddCardModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
