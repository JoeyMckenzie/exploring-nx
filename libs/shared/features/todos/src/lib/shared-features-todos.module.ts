import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SharedServicesModule } from '@exploring-nx/shared/services';
import { SharedFeaturesSettingsModule } from '@exploring-nx/shared/features/settings';
import { EffectsModule } from '@ngrx/effects';

import { todosReducer, TODOS_FEATURE_KEY } from './+state/todos.reducer';
import { TodosEffects } from './+state/todos.effects';
import { TodosFacade } from './+state/todos.facade';

@NgModule({
  imports: [
    CommonModule,
    SharedServicesModule,
    SharedFeaturesSettingsModule,
    StoreModule.forFeature(TODOS_FEATURE_KEY, todosReducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [TodosFacade],
})
export class SharedFeaturesTodosModule {}
