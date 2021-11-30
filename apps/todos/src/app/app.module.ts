import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ENVIRONMENT } from '@exploring-nx/shared/features/settings';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
  ],
})
export class AppModule {}
