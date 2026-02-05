const BasePage = require("./BasePage");

class CommandsActionsPage extends BasePage {
  
  pageShouldBeVisible() {
    this.textShouldBeVisible("h1","Actions");
  }

  fillEmail(email) {
    this.shouldBeVisible(".action-email");
    this.type(".action-email", email);
    this.shouldHaveValue(".action-email", email);
  }

  fillDisabledTextArea(text){
    this.typeDisabled(".action-disabled", text);
  }

}

module.exports = new CommandsActionsPage();