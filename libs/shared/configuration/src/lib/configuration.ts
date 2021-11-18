import { InjectionToken } from '@angular/core';

export type Configuration = {
  production: boolean;
  baseUrl: string;
};

export const CONFIGURATION = new InjectionToken<string>(
  'Application configuration'
);
