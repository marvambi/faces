import { FacesPage } from './app.po';

describe('faces App', () => {
  let page: FacesPage;

  beforeEach(() => {
    page = new FacesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
