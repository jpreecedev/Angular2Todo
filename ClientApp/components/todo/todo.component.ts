import { Component, OnInit, Input } from '@angular/core';
import { TodoStore, Todo } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  template: require('./todo.component.html')
})
export class TodoComponent implements OnInit {
  todoStore: TodoStore;

  @Input() todo: Todo;

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoStore.remove(todo);
    }

    todo.title = editedTitle;
  }

  remove(todo: Todo) {
    this.todoStore.remove(todo);
  }

  ngOnInit() {
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }

  toggleCompletion(todo: Todo) {
    this.todoStore.toggleCompletion(todo);
  }


}
