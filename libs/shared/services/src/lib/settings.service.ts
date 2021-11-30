import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '@exploring-nx/shared/features/settings';
import { Environment, Settings } from '@exploring-nx/shared/models';

@Injectable()
export class SettingsService {
  private readonly _settingsBaseUrl: string;

  constructor(
    @Inject(ENVIRONMENT) private readonly environment: Environment,
    private http: HttpClient
  ) {
    this._settingsBaseUrl = `${window.location.href}/assets/settings.${
      this.environment.production ? 'production' : 'development'
    }.json`;
  }

  getSettings() {
    return this.http.get<Settings>(this._settingsBaseUrl);
  }
}
