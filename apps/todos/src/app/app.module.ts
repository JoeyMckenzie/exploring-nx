import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  CONFIGURATION,
  SharedConfigurationModule,
} from '@exploring-nx/shared/configuration';
import { SharedFeaturesTodosModule } from '@exploring-nx/shared/features/todos';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedConfigurationModule,
    SharedFeaturesTodosModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: CONFIGURATION,
      useValue: environment,
    },
  ],
})
export class AppModule {}
