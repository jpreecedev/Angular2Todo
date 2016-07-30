import { Component, OnInit } from '@angular/core';
import { TodoStore, Todo } from '../services/todo.service';

@Component({
  selector: 'app-footer',
  template: require('./footer.component.html')
})
export class FooterComponent implements OnInit {

  todoStore: TodoStore;

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }

  ngOnInit() {
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

}
