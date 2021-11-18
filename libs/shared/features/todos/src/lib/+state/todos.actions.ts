import { createAction, props } from '@ngrx/store';
import { Todo } from './todos.reducer';

const TODOS_STATE_SLICE = '[Todos/API]';

function _(action: string) {
  return `${TODOS_STATE_SLICE} ${action}`;
}

/**
 * Load todos actions
 */
export const loadTodos = createAction(_('Load all'));

export const loadTodosSuccess = createAction(
  _('Load all success'),
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(_('Load all failure'));

/**
 * Load todo actions
 */
export const loadTodo = createAction(
  _('Load one success'),
  props<{ id: number }>()
);

export const loadTodoSuccess = createAction(
  _('Load one'),
  props<{ todo: Todo }>()
);

export const loadTodoFailure = createAction(_('Load one failure'));
