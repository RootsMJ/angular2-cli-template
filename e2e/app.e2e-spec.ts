import { Angular2CliTemplatePage } from './app.po';

describe('angular2-cli-template App', () => {
  let page: Angular2CliTemplatePage;

  beforeEach(() => {
    page = new Angular2CliTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
