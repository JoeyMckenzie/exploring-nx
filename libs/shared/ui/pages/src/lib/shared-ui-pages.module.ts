import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedFeaturesTodosModule } from '@exploring-nx/shared/features/todos';
import { SharedUiComponentsModule } from '@exploring-nx/shared/ui/components';
import { SharedFeaturesSettingsModule } from '@exploring-nx/shared/features/settings';

import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [
    CommonModule,
    SharedFeaturesTodosModule,
    SharedFeaturesSettingsModule,
    SharedUiComponentsModule,
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
