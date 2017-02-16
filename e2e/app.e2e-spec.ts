import { RelacfrontPage } from './app.po';

describe('relacfront App', function() {
  let page: RelacfrontPage;

  beforeEach(() => {
    page = new RelacfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
