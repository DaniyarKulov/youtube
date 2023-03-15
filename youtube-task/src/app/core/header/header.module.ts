import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, SortComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  exports: [HeaderComponent, SearchComponent],
})
export class HeaderModule {}
