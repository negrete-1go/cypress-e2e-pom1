class BasePage {
  // ---------- Finders ----------
  get(selector, options = {}) {
    return cy.get(selector, options);
  }

  contains(text, options = {}) {
    return cy.contains(text, options);
  }

  // ---------- Actions ----------
  click(selector) {
    this.get(selector).click();
  }

  type(selector, text) {
    this.get(selector).clear().type(text);
  }

  // ---------- Assertions ----------
  shouldBeVisible(selector) {
    this.get(selector).should("be.visible");
  }

  textShouldBeVisible(text, options = {}) {
    this.contains(text, options).should("be.visible");
  }

  urlShouldInclude(path) {
    cy.url().should("include", path);
  }
}

module.exports = BasePage;