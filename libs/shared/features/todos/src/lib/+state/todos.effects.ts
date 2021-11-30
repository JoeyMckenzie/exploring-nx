import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { TodosService } from '@exploring-nx/shared/services';
import * as TodosActions from './todos.actions';
import { SettingsFacade } from '@exploring-nx/shared/features/settings';

@Injectable()
export class TodosEffects {
  loadTodosEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      withLatestFrom(this.settingsFacade.baseUrl$),
      mergeMap(([, baseUrl]) =>
        this.todosService.getTodos(baseUrl).pipe(
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
      withLatestFrom(this.settingsFacade.baseUrl$),
      mergeMap(([{ id }, baseUrl]) =>
        this.todosService.getTodo(id, baseUrl).pipe(
          map((todo) => TodosActions.loadTodoSuccess({ todo })),
          catchError((error) => {
            console.error(error.toString());
            return of(TodosActions.loadTodoFailure());
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todosService: TodosService,
    private settingsFacade: SettingsFacade
  ) {}
}
