import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app structure', () => {
    page.navigateTo();
    expect(page.getTodoForm()).toBeDefined();
    expect(page.getTodoList()).toBeDefined();
  });
  it('should add todo', () => {
    page.navigateTo();
    page.addTodo('todo 1');
    const list = page.getTodoListContent();
    expect(list.count()).toBe(3);
    expect(page.getNthTodoTitle(0).getText()).toBe('todo 1');
  });
});

