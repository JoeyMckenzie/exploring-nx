import { Settings } from '@exploring-nx/shared/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_FEATURE_KEY } from './settings.reducer';

export const settingsFeatureSelector = createFeatureSelector<Settings>(
  SETTINGS_FEATURE_KEY
);

export const selectBaseUrl = createSelector(
  settingsFeatureSelector,
  (state) => state.baseUrl
);
