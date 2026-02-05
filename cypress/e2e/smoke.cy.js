const homePage = require("../pages/HomePage");


describe("Smoke - Example Cypress site", () => {
  it("loads home", () => {
    homePage.visit();
    homePage.pageShouldBeVisible();
  });
});