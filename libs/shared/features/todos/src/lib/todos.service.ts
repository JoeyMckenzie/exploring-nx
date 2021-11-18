import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Configuration,
  CONFIGURATION,
} from '@exploring-nx/shared/configuration';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Todo } from './+state/todos.reducer';

const MAX_RANDOM_DELAY = 2000;

function withRandomDelay<T>() {
  return delay<T>(Math.floor(Math.random() * MAX_RANDOM_DELAY));
}

@Injectable()
export class TodosService {
  constructor(
    @Inject(CONFIGURATION) private readonly configuration: Configuration,
    private http: HttpClient
  ) {}

  getTodo(id: number): Observable<Todo> {
    return this.http
      .get<Todo>(`${this.configuration.baseUrl}/${+id}`)
      .pipe(withRandomDelay());
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.configuration.baseUrl).pipe(
      withRandomDelay(),
      map((todos) => todos.slice(0, 5))
    );
  }
}
