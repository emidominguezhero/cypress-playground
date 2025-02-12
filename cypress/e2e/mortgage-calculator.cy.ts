import { calculateMonthlyPriceUsingZillowCalculator } from "../utilities/mortgage-calculator/index";

describe("Mortgage Calculator Tests", () => {
	beforeEach(() => {
		cy.mockUncaughtExceptions();
	});

	describe("With a down payment of 20% or more and a 30-year loan term (default)", () => {
		it("should calculate the monthly payment without property taxes and match Zillow's", () => {
			const basePrice = 300000;
			const downPaymentPercentage = 20;
			const interestRate = 3.5;
			const propertyTaxesAmountPerMonth = 0;
			const homeInsurancePerMonth = 0;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 1077.71;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: false,
				includeTaxesAndInsurance: false,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes and match Zillow's", () => {
			const basePrice = 300000;
			const downPaymentPercentage = 20;
			const interestRate = 3.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 0;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 1327.71;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: false,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes and insurance and match Zillow's", () => {
			const basePrice = 300000;
			const downPaymentPercentage = 20;
			const interestRate = 3.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 100;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 1427.71;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes, insurance, and HOA dues and match Zillow's", () => {
			const basePrice = 300000;
			const downPaymentAmount = 60000;
			const downPaymentPercentage = 20;
			const interestRate = 3.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 100;
			const hoaFeesPerMonth = 50;
			const expectedMonthlyPayment = 1477.71;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				downPaymentAmount,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: false,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});
	});

	describe("With a down payment of 20% or more and a 15-year loan term", () => {
		it("should calculate the monthly payment without property taxes and match Zillow's", () => {
			const basePrice = 300000;
			const loanProgramTerm = 15;
			const downPaymentAmount = 60000;
			const downPaymentPercentage = 20;
			const interestRate = 3.5;
			const propertyTaxesAmountPerMonth = 0;
			const homeInsurancePerMonth = 0;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 1715.72;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				loanProgramTerm,
				downPaymentAmount,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: false,
				includeTaxesAndInsurance: false,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes and match Zillow's", () => {
			const basePrice = 300000;
			const loanProgramTerm = 15;
			const downPaymentAmount = 60000;
			const downPaymentPercentage = 20;
			const interestRate = 3.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 0;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 1965.72;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				loanProgramTerm,
				downPaymentAmount,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: false,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes and insurance and match Zillow's", () => {
			const basePrice = 300000;
			const loanProgramTerm = 15;
			const downPaymentAmount = 60000;
			const downPaymentPercentage = 20;
			const interestRate = 3.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 100;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 2065.72;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				loanProgramTerm,
				downPaymentAmount,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes, insurance, and HOA dues and match Zillow's", () => {
			const basePrice = 300000;
			const loanProgramTerm = 15;
			const downPaymentAmount = 60000;
			const downPaymentPercentage = 20;
			const interestRate = 3.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 100;
			const hoaFeesPerMonth = 50;
			const expectedMonthlyPayment = 2115.72;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				loanProgramTerm,
				downPaymentAmount,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: false,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});
	});

	describe("With a down payment of less than 20% and a 30-year loan term (default)", () => {
		it("should calculate the monthly payment without property taxes and match Zillow's", () => {
			const basePrice = 300000;
			const downPaymentPercentage = 5;
			const interestRate = 6.5;
			const propertyTaxesAmountPerMonth = 0;
			const homeInsurancePerMonth = 0;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 1932.02;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: false,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes and match Zillow's", () => {
			const basePrice = 300000;
			const downPaymentPercentage = 5;
			const interestRate = 6.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 0;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 2182.02;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes and insurance and match Zillow's", () => {
			const basePrice = 300000;
			const downPaymentPercentage = 5;
			const interestRate = 6.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 100;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 2282.02;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes, insurance, and HOA dues and match Zillow's", () => {
			const basePrice = 300000;
			const downPaymentPercentage = 5;
			const interestRate = 6.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 100;
			const hoaFeesPerMonth = 50;
			const expectedMonthlyPayment = 2332.02;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});
	});

	describe("With a down payment of less than 20% and a 15-year loan term", () => {
		it("should calculate the monthly payment without property taxes and match Zillow's", () => {
			const basePrice = 300000;
			const loanProgramTerm = 15;
			const downPaymentPercentage = 5;
			const interestRate = 6.5;
			const propertyTaxesAmountPerMonth = 0;
			const homeInsurancePerMonth = 0;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 2613.28;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				loanProgramTerm,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: false,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes and match Zillow's", () => {
			const basePrice = 300000;
			const loanProgramTerm = 15;
			const downPaymentPercentage = 5;
			const interestRate = 6.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 0;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 2863.28;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				loanProgramTerm,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes and insurance and match Zillow's", () => {
			const basePrice = 300000;
			const loanProgramTerm = 15;
			const downPaymentPercentage = 5;
			const interestRate = 6.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 100;
			const hoaFeesPerMonth = 0;
			const expectedMonthlyPayment = 2963.28;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				loanProgramTerm,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});

		it("should calculate the monthly payment with property taxes, insurance, and HOA dues and match Zillow's", () => {
			const basePrice = 300000;
			const loanProgramTerm = 15;
			const downPaymentPercentage = 5;
			const interestRate = 6.5;
			const propertyTaxesAmountPerMonth = 250;
			const homeInsurancePerMonth = 100;
			const hoaFeesPerMonth = 50;
			const expectedMonthlyPayment = 3013.28;

			// Exercise: Create your own helper and compare against Zillow's calculator

			calculateMonthlyPriceUsingZillowCalculator({
				basePrice,
				loanProgramTerm,
				downPaymentPercentage,
				interestRate,
				propertyTaxesAmountPerMonth,
				homeInsurancePerMonth,
				hoaFeesPerMonth,
				includePMI: true,
				includeTaxesAndInsurance: true,
				expectedMonthlyPayment,
			});
		});
	});
});
