import { Component } from '@angular/core';
import { TodoStore, Todo } from './services/store';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [FooterComponent, TodoComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  todoStore: TodoStore;
  newTodoText = '';

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText);
      this.newTodoText = '';
    }
  }
}
