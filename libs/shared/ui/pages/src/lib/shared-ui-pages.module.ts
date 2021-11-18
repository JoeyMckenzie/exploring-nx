import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedFeaturesTodosModule } from '@exploring-nx/shared/features/todos';
import { SharedServicesModule } from '@exploring-nx/shared/services';

import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [
    CommonModule,
    SharedFeaturesTodosModule,
    SharedServicesModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodosComponent,
      },
    ]),
  ],
  declarations: [TodosComponent],
})
export class SharedUiPagesModule {}
