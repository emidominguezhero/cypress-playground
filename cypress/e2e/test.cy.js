/// <reference types="cypress"/>

describe("Google Search", () => {
	it("should search for Cypress", () => {
		cy.visit("https://www.google.com");
		cy.get('textarea[title="Search"]').type("Cypress.io{enter}");
		cy.contains(/Cypress: Testing Frameworks for Javascript/gi)
			.should("be.visible")
			.click();
	});
});
