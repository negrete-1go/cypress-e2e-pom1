const BasePage = require("./BasePage");

class Header extends BasePage {
 

  componentShouldBeVisible() {
    this.textShouldBeVisible("cypress.io");
  }

  openCommandsMenu() {
    this.contains("Commands").click();
    this.shouldBeVisible("ul.dropdown-menu"); 
  }

  selectCommandOption(option) {
     this.get("ul.dropdown-menu").contains(option).click();
  }

  goToCommand(option) {
    this.openCommandsMenu();
    this.selectCommandOption(option);
    this.urlShouldInclude(`/commands/${option.toLowerCase()}`); 
  }
}

module.exports = new Header();