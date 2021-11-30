import { Settings } from '@exploring-nx/shared/models';
import { createAction, props } from '@ngrx/store';

const SETTINGS_STATE_SLICE = '[Settings]';

function prefix(action: string) {
  return `${SETTINGS_STATE_SLICE} ${action}`;
}

export const loadSettings = createAction(prefix('Load'));
export const loadSettingsSuccess = createAction(
  prefix('Load success'),
  props<{ settings: Settings }>()
);
export const loadSettingsFailure = createAction(prefix('Load failure'));
