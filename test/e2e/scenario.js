//
// test/e2e/rscenario.js
//
describe("E2E: Testing Requests", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working /artists page', function() {
    browser().navigateTo('#/artists');
    expect(browser().location().path()).toBe("/artists");
  });

  it('should have a working /events page', function() {
    browser().navigateTo('#/events');
    expect(browser().location().path()).toBe("/events");
  });

  xit('should fill out the mailing list form on the /mailing page', function() {
    browser().navigateTo('#/mailing');
    input('name').enter('Rich Beaudoin');
    sleep(3);
    input('email').enter('rich.beaudoin.jr@gmail.com');
    sleep(3);

    expect(browser().location().path()).toBe("/events");
  });

});