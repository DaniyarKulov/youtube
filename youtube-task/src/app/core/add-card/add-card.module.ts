import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CreatCardComponent } from './creat-card/creat-card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreatCardComponent,
  },
];
@NgModule({
  declarations: [CreatCardComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AddCardModule {}
