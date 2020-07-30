import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
}
