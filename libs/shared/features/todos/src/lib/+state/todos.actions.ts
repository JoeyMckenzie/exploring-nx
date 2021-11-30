import { createAction, props } from '@ngrx/store';
import { Todo } from '../models';

const TODOS_STATE_SLICE = '[Todos/API]';

function prefix(action: string) {
  return `${TODOS_STATE_SLICE} ${action}`;
}

/**
 * Load todos actions
 */
export const loadTodos = createAction(prefix('Load All'));
export const loadTodosSuccess = createAction(
  'Load all success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(prefix('Load all failure'));

/**
 * Load todo actions
 */
export const loadTodo = createAction(
  prefix('Load one success'),
  props<{ id: number }>()
);
export const loadTodoSuccess = createAction(
  prefix('Load one'),
  props<{ todo: Todo }>()
);
export const loadTodoFailure = createAction(prefix('Load one'));
