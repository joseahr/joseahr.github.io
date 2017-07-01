import { Joseahr.Github.IoPage } from './app.po';

describe('joseahr.github.io App', () => {
  let page: Joseahr.Github.IoPage;

  beforeEach(() => {
    page = new Joseahr.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
