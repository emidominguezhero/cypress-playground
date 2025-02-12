/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface Chainable<Subject> {
		/**
		 * Prevents uncaught exceptions from failing the test
		 */
		mockUncaughtExceptions(): Cypress.Chainable<void>;
	}
}

// Prevents uncaught exceptions from failing the test
Cypress.Commands.add("mockUncaughtExceptions", () => {
	Cypress.on("uncaught:exception", (_error, _runnable) => false);
});
