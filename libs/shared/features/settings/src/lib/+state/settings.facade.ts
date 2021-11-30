import { Injectable } from '@angular/core';
import { Settings } from '@exploring-nx/shared/models';
import { Store } from '@ngrx/store';
import * as fromActions from './settings.actions';
import * as fromSelectors from './settings.selectors';

@Injectable()
export class SettingsFacade {
  baseUrl$ = this.store.select(fromSelectors.selectBaseUrl);

  constructor(private store: Store<Settings>) {}

  loadSettings(): void {
    this.store.dispatch(fromActions.loadSettings());
  }
}
