import { Component, OnInit } from '@angular/core';
import { TodoStore, Todo } from '../services/store';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
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
