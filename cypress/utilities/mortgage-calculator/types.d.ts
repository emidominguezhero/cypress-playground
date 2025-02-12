export interface BaseCalculatorArguments {
	/** The base price of the home */
	basePrice: number;
	/** The down payment amount */
	downPaymentAmount?: number;
	/** The down payment percentage */
	downPaymentPercentage?: number;
	/** The loan program term in years (default is 30) */
	loanProgramTerm?: 15 | 30;
	/** The interest rate */
	interestRate?: number;
	/** The property taxes amount per month */
	propertyTaxesAmountPerMonth?: number;
	/** The home insurance per year */
	homeInsurancePerMonth?: number;
	/** The HOA dues per month */
	hoaFeesPerMonth?: number;
	/** The expected monthly payment */
	expectedMonthlyPayment: number;
}

export interface ZillowCalculatorArguments extends BaseCalculatorArguments {
	/** Whether to include PMI in the calculation */
	includePMI?: boolean;
	/** Whether to include taxes and insurance in the calculation */
	includeTaxesAndInsurance?: boolean;
	/** The property taxes percentage per month	 */
	propertyTaxesPercentagePerYear?: number;
}
