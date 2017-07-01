import { WebpagePage } from './app.po';

describe('webpage App', () => {
  let page: WebpagePage;

  beforeEach(() => {
    page = new WebpagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
