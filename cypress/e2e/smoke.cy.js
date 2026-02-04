describe("Smoke test - Cypress public site", () => {
  it("should load the Cypress example page", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("Kitchen Sink").should("be.visible");
    cy.title().should("contain", "Cypress");
  });
});