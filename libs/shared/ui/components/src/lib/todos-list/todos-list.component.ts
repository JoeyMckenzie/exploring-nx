import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Todo } from '@exploring-nx/shared/models';

@Component({
  selector: 'exploring-nx-todos-list',
  templateUrl: './todos-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TodosListComponent {
  @HostBinding('class') class = 'pt-6 flex flex-col';
  @Input() todos: Todo[] = [];
}
