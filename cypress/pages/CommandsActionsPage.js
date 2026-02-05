const BasePage = require("./BasePage");

class CommandsActionsPage extends BasePage {
  
  pageShouldBeVisible() {
    this.textShouldBeVisible("h1","Actions");
  }

}

module.exports = new CommandsActionsPage();