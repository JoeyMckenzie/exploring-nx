import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState, TODOS_FEATURE_KEY } from './todos.reducer';

export const todosFeatureSelector = createFeatureSelector<TodosState>(
  TODOS_FEATURE_KEY
);

export const selectTodos = createSelector(
  todosFeatureSelector,
  (state) => state.todos
);

export const selectTodo = createSelector(
  todosFeatureSelector,
  (state) => state.selectedTodo
);

export const selectLoading = createSelector(
  todosFeatureSelector,
  (state) => state.loading === 'loading'
);
