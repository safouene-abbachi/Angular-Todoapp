import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from '../../services/todos.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {}

  //set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }
  onToggle(todo) {
    // Toggle in UI
    this.todo.completed = !this.todo.completed;
    //Updating the server
    this.todoService.toggleTodos(todo).subscribe((todo) => console.log(todo));
  }
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
