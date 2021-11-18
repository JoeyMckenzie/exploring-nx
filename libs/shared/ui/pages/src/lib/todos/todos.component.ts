import { Component, OnInit } from '@angular/core';
import { TodosFacade } from '@exploring-nx/shared/features/todos';
import { UnsubscribeService } from '@exploring-nx/shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'exploring-nx-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  loading$ = this.todosFacade.loading$;
  todos$ = this.todosFacade.availableTodos$;

  constructor(
    private todosFacade: TodosFacade,
    private unsubscribe$: UnsubscribeService
  ) {}

  ngOnInit(): void {
    this.todos$.pipe(takeUntil(this.unsubscribe$));
    this.loading$.pipe(takeUntil(this.unsubscribe$));
  }

  onLoadClicked() {
    this.todosFacade.loadTodos();
  }
}
