import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models';
import * as TodosActions from './todos.actions';

export const TODOS_FEATURE_KEY = 'todos';

type LoadingState = 'idle' | 'loading' | 'error';

export interface TodosState {
  todos: Todo[];
  loading: LoadingState;
  selectedTodo?: Todo;
}

const initialTodosState: TodosState = {
  todos: [],
  loading: 'idle',
};

export const todosReducer = createReducer(
  initialTodosState,
  on(TodosActions.loadTodos, (state) => ({
    ...state,
    loading: 'loading',
  })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: 'idle',
    todos,
  })),
  on(TodosActions.loadTodosFailure, (state) => ({
    ...state,
    loading: 'error',
    todosd: [],
  })),
  on(TodosActions.loadTodo, (state) => ({
    ...state,
    loading: 'loading',
  })),
  on(TodosActions.loadTodoSuccess, (state, { todo }) => ({
    ...state,
    loading: 'idle',
    selectedTodo: todo,
  })),
  on(TodosActions.loadTodoFailure, (state) => ({
    ...state,
    loading: 'error',
    selectedTodo: undefined,
  }))
);
