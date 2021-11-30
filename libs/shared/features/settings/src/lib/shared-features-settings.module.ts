import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  SETTINGS_FEATURE_KEY,
  settingsReducer,
} from './+state/settings.reducer';
import { SettingsEffects } from './+state/settings.effects';
import { SettingsFacade } from './+state/settings.facade';
import { SharedServicesModule } from '@exploring-nx/shared/services';

export const ENVIRONMENT = new InjectionToken('Environment settings');

@NgModule({
  imports: [
    CommonModule,
    SharedServicesModule,
    StoreModule.forFeature(SETTINGS_FEATURE_KEY, settingsReducer),
    EffectsModule.forFeature([SettingsEffects]),
  ],
  providers: [SettingsFacade],
})
export class SharedFeaturesSettingsModule {}
