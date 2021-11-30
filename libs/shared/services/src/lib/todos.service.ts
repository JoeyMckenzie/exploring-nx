import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Todo } from '@exploring-nx/shared/models';

const BASE_API_URL = 

const MAX_RANDOM_DELAY = 2000;

function withRandomDelay<T>() {
  return delay<T>(Math.floor(Math.random() * MAX_RANDOM_DELAY));
}

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodo(id: number, baseUrl: string): Observable<Todo> {
    return this.http.get<Todo>(`${baseUrl}/${+id}`).pipe(withRandomDelay());
  }

  getTodos(baseUrl: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl).pipe(
      withRandomDelay(),
      map((todos) => todos.slice(0, 5))
    );
  }
}
