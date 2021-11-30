import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SettingsService } from '@exploring-nx/shared/services';
import * as fromActions from './settings.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class SettingsEffects {
  loadSettingsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadSettings),
      mergeMap(() =>
        this.settingsService
          .getSettings()
          .pipe(
            map((settings) => fromActions.loadSettingsSuccess({ settings }))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
  ) {}
}
