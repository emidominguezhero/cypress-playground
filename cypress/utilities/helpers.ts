/**
 * Formats a number
 * @param number The number to format
 * @param locales The locales
 * @param options The number format options
 * @returns The formatted number
 */
export function formatNumber(number: string | number, locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string {
	return number.toLocaleString(locales ?? "en-US", options);
}

/**
 * Formats a price
 * @param price The price to format
 * @param locales The locales
 * @param options The number format options
 * @returns The formatted price
 */
export function formatPrice(price: number, locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string {
	return formatNumber(price, locales, { style: "currency", currency: "USD", ...options });
}

/**
 * Parse a string to a number
 * @param value The value to parse
 * @returns The parsed number
 */
export function parseStringToNumber(value: string): number {
	return parseFloat(value.replace(/[^\d.-]/g, ""));
}

/**
 * Input a value into an input field with enhanced clearing and validation
 * @param selector The input selector
 * @param value The value to input
 * @returns The Cypress chainable
 */
export function inputNumber(selector: string, value: number): Cypress.Chainable<JQuery<HTMLInputElement>> {
	cy.get(selector).should("exist", { timeout: 5000 });

	cy.get(selector).click({ force: true, waitForAnimations: true });

	cy.get(selector).clear({ force: true, waitForAnimations: true });

	cy.get(selector).then((input) => {
		if ((input.val() as string).trim()) {
			cy.wrap(input).clear({ force: true, waitForAnimations: true });
		}
	});

	cy.get(selector).type(value.toString());

	cy.get(selector).should((input) => {
		expect(parseStringToNumber(input.val() as string)).to.be.closeTo(value, 0.001);
	});

	cy.get(selector).blur();

	return cy.get(selector);
}

/**
 * Select a value from a select field
 * @param selector The select selector
 * @param value The value to select
 * @returns The Cypress chainable
 */
export function select(selector: string, value: string): Cypress.Chainable<JQuery<HTMLSelectElement>> {
	cy.get(selector).should("exist");

	cy.get(selector).select(value);

	cy.get(selector).blur();

	return cy.get(selector);
}
