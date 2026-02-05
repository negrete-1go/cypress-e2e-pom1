const BasePage = require("./BasePage");

class HomePage extends BasePage {
  visit() {
    cy.visit("/");
  }

  pageShouldBeVisible() {
    this.textShouldBeVisible("Kitchen Sink");
  }

  openCommandsMenu() {
    this.contains("Commands").click();
    this.shouldBeVisible("ul.dropdown-menu"); // menu is open/visible
  }

  goToCommandOption(option) {
    this.openCommandsMenu();
    this.get("ul.dropdown-menu").contains(option).click();
    this.urlShouldInclude(`/commands/${option.toLowerCase()}`); 
  }
}

module.exports = new HomePage();