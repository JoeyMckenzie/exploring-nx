import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodosService } from '../todos.service';
import * as TodosActions from './todos.actions';

@Injectable()
export class TodosEffects {
  loadTodosEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => TodosActions.loadTodosSuccess({ todos })),
          catchError((error) => {
            console.error(error.toString());
            return of(TodosActions.loadTodosFailure());
          })
        )
      )
    )
  );

  loadTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodo),
      mergeMap(({ id }) =>
        this.todosService.getTodo(id).pipe(
          map((todo) => TodosActions.loadTodoSuccess({ todo })),
          catchError((error) => {
            console.error(error.toString());
            return of(TodosActions.loadTodoFailure());
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
