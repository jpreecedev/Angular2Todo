import { Component } from '@angular/core';
import { TodoStore, Todo } from '../services/todo.service';
import { FooterComponent } from '../footer/footer.component';
import { TodoComponent } from '../todo/todo.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app-home',
    directives: [...ROUTER_DIRECTIVES, FooterComponent, TodoComponent],
    template: require('./home.component.html')
})
export class HomeComponent {

    newTodoText: string = '';

    constructor(public todoStore: TodoStore) {

    }

    addTodo() {
        if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
    }

}
