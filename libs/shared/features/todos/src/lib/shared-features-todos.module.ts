import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { todosReducer, TODOS_FEATURE_KEY } from './+state/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './+state/todos.effects';
import { TodosService } from './todos.service';
import { TodosFacade } from './+state/todos.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(TODOS_FEATURE_KEY, todosReducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [TodosService, TodosFacade],
})
export class SharedFeaturesTodosModule {}
