import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosListItemComponent } from './todos-list-item/todos-list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TodosListComponent,
    TodosListItemComponent
  ],
})
export class SharedUiComponentsModule {}
