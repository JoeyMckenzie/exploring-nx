import { Component, Input } from '@angular/core';
import { Todo } from '@exploring-nx/shared/models';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[exploring-nx-todos-list-item]',
  templateUrl: './todos-list-item.component.html',
})
export class TodosListItemComponent {
  @Input() todo?: Todo;
}
