import { inputNumber, parseStringToNumber, select } from "../helpers";
import type { ZillowCalculatorArguments } from "./types";

/**
 * Calculate the monthly price using Zillow's calculator
 * @param args The calculator arguments
 */
export function calculateMonthlyPriceUsingZillowCalculator({
	basePrice,
	downPaymentAmount,
	downPaymentPercentage,
	loanProgramTerm = 30,
	interestRate,
	expectedMonthlyPayment,
	includePMI = true,
	includeTaxesAndInsurance = true,
	propertyTaxesAmountPerMonth,
	propertyTaxesPercentagePerYear,
	homeInsurancePerMonth,
	hoaFeesPerMonth,
}: ZillowCalculatorArguments): Cypress.Chainable<number> {
	const zillowUrl = "https://www.zillow.com/mortgage-calculator/";

	// Calculator selectors
	const basePriceInput = "input[name='homePrice']";
	const downPaymentAmountInput = "input[name='downPayment']";
	const downPaymentPercentInput = "input[name='downPaymentPercent']";
	const loanTermSelect = "select[name='term']";
	const interestRateInput = "input[name='rate']";
	const includePMICheckbox = "input[name='includePMI']";
	const includeTaxesAndInsuranceCheckbox = "input[name='includeTaxesInsurance']";
	const propertyTaxesAmountInput = "input[name='propertyTaxRateAnnualAmount']";
	const propertyTaxesPercentageInput = "input[name='propertyTaxRate']";
	const homeInsuranceInput = "input[name='annualHomeownersInsurance']";
	const hoaFeesInput = "input[name='monthlyHOA']";
	const breakdownPanel = "#breakdown-panel";

	return cy.visit(zillowUrl).then(() => {
		// Base price
		inputNumber(basePriceInput, basePrice).log("Base price updated");

		// Down payment amount
		if (typeof downPaymentAmount === "number") {
			inputNumber(downPaymentAmountInput, downPaymentAmount).log("Down payment amount updated");
		}

		// Down payment percentage
		if (typeof downPaymentPercentage === "number") {
			inputNumber(downPaymentPercentInput, downPaymentPercentage).log("Down payment percentage updated");
		}

		// Interest rate
		if (typeof interestRate === "number") {
			inputNumber(interestRateInput, interestRate).log("Interest rate updated");
		}

		// Loan program term
		if (typeof loanProgramTerm === "number") {
			select(loanTermSelect, `Fixed${loanProgramTerm}Year`).log("Loan program term updated");
		}

		// Advanced settings toggle
		cy.get("button").contains("Advanced").click();

		// Include PMI
		if (typeof includePMI === "boolean") {
			cy.get(includePMICheckbox)[includePMI ? "check" : "uncheck"]().log("Include PMI updated");
		}

		// Include taxes and insurance
		if (typeof includeTaxesAndInsurance === "boolean") {
			cy.get(includeTaxesAndInsuranceCheckbox)[includeTaxesAndInsurance ? "check" : "uncheck"]().log("Include taxes and insurance updated");
		}

		// Property taxes amount per year
		if (typeof propertyTaxesAmountPerMonth === "number") {
			inputNumber(propertyTaxesAmountInput, propertyTaxesAmountPerMonth * 12).log("Property taxes updated");
		}

		// Property taxes percentage per year
		if (typeof propertyTaxesPercentagePerYear === "number") {
			inputNumber(propertyTaxesPercentageInput, propertyTaxesPercentagePerYear).log("Property taxes percentage updated");
		}

		// Home insurance per year
		if (typeof homeInsurancePerMonth === "number") {
			inputNumber(homeInsuranceInput, homeInsurancePerMonth * 12).log("Home insurance updated");
		}

		// HOA dues per month
		if (typeof hoaFeesPerMonth === "number") {
			inputNumber(hoaFeesInput, hoaFeesPerMonth).log("HOA fees updated");
		}

		// Monthly payment
		cy.get(breakdownPanel)
			.children()
			.contains("Your payment")
			.parent()
			.children()
			.contains("text", /\d+/)
			.then((priceElement) => {
				// Check if the monthly payment is close to the expected value (within $100)
				// This is mainly because monthly insurance values may vary and Zillow's calculator don't allow to set the exact value
				expect(parseStringToNumber(priceElement.text())).to.be.closeTo(expectedMonthlyPayment, 100);
			});

		// Scroll to top to show the monthly payment
		cy.scrollTo("top");

		return cy
			.get(breakdownPanel)
			.children()
			.contains("Your payment")
			.parent()
			.children()
			.contains("text", /\d+/)
			.then((priceElement) => {
				return parseStringToNumber(priceElement.text());
			});
	});
}
