import { Component } from '@angular/core';
import { TodosFacade } from '@exploring-nx/shared/features/todos';

@Component({
  selector: 'exploring-nx-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todos$ = this.todosFacade.availableTodos$;
  loading$ = this.todosFacade.loading$;

  constructor(private todosFacade: TodosFacade) {}

  onLoadClicked() {
    this.todosFacade.loadTodos();
  }
}
