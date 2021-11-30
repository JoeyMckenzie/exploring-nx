import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribeService } from './unsubscribe.service';
import { TodosService } from './todos.service';
import { SettingsService } from './settings.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [UnsubscribeService, TodosService, SettingsService],
})
export class SharedServicesModule {}
