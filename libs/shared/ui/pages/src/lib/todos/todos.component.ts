import { Component, OnInit } from '@angular/core';
import { SettingsFacade } from '@exploring-nx/shared/features/settings';
import { TodosFacade } from '@exploring-nx/shared/features/todos';

@Component({
  selector: 'exploring-nx-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  loading$ = this.todosFacade.loading$;
  todos$ = this.todosFacade.availableTodos$;

  constructor(
    private todosFacade: TodosFacade,
    private settingsFacade: SettingsFacade
  ) {}

  ngOnInit() {
    this.settingsFacade.loadSettings();
  }

  onLoadClicked() {
    this.todosFacade.loadTodos();
  }
}
