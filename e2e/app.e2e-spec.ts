import { RoyaltyLandingAngularPage } from './app.po';

describe('royalty-landing-angular App', function() {
  let page: RoyaltyLandingAngularPage;

  beforeEach(() => {
    page = new RoyaltyLandingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
