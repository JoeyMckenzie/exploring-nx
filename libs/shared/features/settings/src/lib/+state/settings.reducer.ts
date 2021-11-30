import { Settings } from '@exploring-nx/shared/models';
import { createReducer, on } from '@ngrx/store';
import * as fromActions from './settings.actions';

export const SETTINGS_FEATURE_KEY = 'settings';

const initialSettingsState: Settings = {
  baseUrl: '',
  environment: '',
};

export const settingsReducer = createReducer(
  initialSettingsState,
  on(fromActions.loadSettings, () => initialSettingsState),
  on(fromActions.loadSettingsSuccess, (_, { settings }) => ({
    baseUrl: settings.baseUrl,
    environment: settings.environment,
  })),
  on(fromActions.loadSettings, () => initialSettingsState)
);
