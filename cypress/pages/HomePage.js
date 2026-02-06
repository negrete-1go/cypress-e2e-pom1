const BasePage = require("./BasePage");
const header = require("../components/Header");

class HomePage extends BasePage {
  visit() {
    cy.visit("/");
  }

  pageShouldBeVisible() {
    this.textShouldBeVisible("Kitchen Sink");
  }

  goToCommandOption(option) {
    header.goToCommand(option);
  }
}

module.exports = new HomePage();