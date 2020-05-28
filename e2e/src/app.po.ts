import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() { return browser.get('/'); }

  getTodoForm() { return element(by.css('app-root app-todo-form')); }
  getTodoList() { return element(by.css('app-root app-todo-list')); }
  addTodo(title) {
    const input = element(by.css('app-todo-form input'));
    input.sendKeys(title);
    element(by.css('app-todo-form button')).click();
  }
  getTodoListContent() { return element.all(by.css('app-root app-todo-list app-todo')); }
  getNthTodoTitle(index: number) {
    const list = this.getTodoListContent();
    return list.get(index).element(by.css('.title'));
  }

}
