const homePage = require("../pages/HomePage");
const commandsActionsPage = require("../pages/CommandsActionsPage");

describe("Smoke - Example Cypress site", () => {
  it("loads home and navigates to Commands", () => {
    homePage.visit();
    homePage.pageShouldBeVisible();
    homePage.goToCommandOption("Actions");
    commandsActionsPage.pageShouldBeVisible();

  });
});