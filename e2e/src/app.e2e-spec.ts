import { AppComponent } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppComponent;

  beforeEach(() => {
    page = new AppComponent();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('angularGrid app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
