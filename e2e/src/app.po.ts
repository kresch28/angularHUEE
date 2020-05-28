import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() { return browser.get('/'); }

  getTodoForm() { return element(by.css('app-root app-todo-form')); }
  getTodoList() { return element(by.css('app-root app-todo-list')); }
  getTodoFormInput() {return element(by.css('app-todo-form input')); }
  addTodo(title) {
    const input = element(by.css('app-todo-form input'));
    input.sendKeys(title);
    element(by.css('app-todo-form button')).click();
  }
  getTodoListContent() { return element.all(by.css('app-root app-todo-list app-todo')).length; }
  getNthTodoTitle() {
    return this.getTodoListContent().length;
  }

}
