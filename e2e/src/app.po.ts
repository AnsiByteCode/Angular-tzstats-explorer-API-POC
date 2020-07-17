import { browser, by, element } from 'protractor';

export class AppComponent {
  navigateTo(): Promise<unknown> {
    return browser.get('/localhost:3000/') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
