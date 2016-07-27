import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { TodoStore } from './app/services/store';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [TodoStore]);
