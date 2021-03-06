import { Injectable } from '@angular/core';
import { HttpCommunicationsService } from '../http-communications/http-communications.service';
import { Todo } from '../model/todo.interface';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable()
export class TodosServerService {

  constructor(private httpCommunications: HttpCommunicationsService) { }

  insertTodo(todo: Todo): Observable<Todo>{
    return this.httpCommunications.retrievePostCall("todos", todo);
  }
}
