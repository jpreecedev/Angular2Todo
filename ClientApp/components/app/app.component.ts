import { Component } from '@angular/core';
import { TodoStore, Todo } from '../services/todo.service';
import { FooterComponent } from '../footer/footer.component';
import { TodoComponent } from '../todo/todo.component';

@Component({
    selector: 'app',
    directives: [FooterComponent, TodoComponent],
    template: require('./app.component.html')
})
export class AppComponent {

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
