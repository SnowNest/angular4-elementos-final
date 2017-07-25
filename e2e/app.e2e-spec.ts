import { Angular4ElementosFinalPage } from './app.po';

describe('angular4-elementos-final App', () => {
  let page: Angular4ElementosFinalPage;

  beforeEach(() => {
    page = new Angular4ElementosFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
