const homePage = require("../pages/HomePage");
const commandsActionsPage = require("../pages/CommandsActionsPage");

describe("Commands Actions", () => {
    beforeEach(function ()  {
         cy.fixture("example").as("user");
         homePage.visit();
         homePage.pageShouldBeVisible();
         homePage.goToCommandOption("Actions");
         commandsActionsPage.pageShouldBeVisible();
    });

  it("allows typing an email", function () {
    commandsActionsPage.fillEmail(this.user.email);
  });

  it("allows typing on disabled textarea", () => {
     commandsActionsPage.fillDisabledTextArea("Disabled Error checking");
  });

  it("allows focusing on password field", () => {
     commandsActionsPage.focusPassword();
  });

 

});