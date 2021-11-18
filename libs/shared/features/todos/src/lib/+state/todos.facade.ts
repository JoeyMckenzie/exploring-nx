import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from './todos.reducer';
import * as TodosSelectors from './todos.selectors';
import * as TodosActions from './todos.actions';

@Injectable()
export class TodosFacade {
  availableTodos$ = this.store.select(TodosSelectors.selectTodos);
  selectedTodo$ = this.store.select(TodosSelectors.selectTodo);
  loading$ = this.store.select(TodosSelectors.selectLoading);

  constructor(private store: Store<TodosState>) {}

  loadTodos() {
    this.store.dispatch(TodosActions.loadTodos());
  }

  loadTodo(id: number) {
    this.store.dispatch(TodosActions.loadTodo({ id }));
  }
}
