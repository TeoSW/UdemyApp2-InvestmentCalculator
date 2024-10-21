export type Data = {
    initialInvestment: number; 
    annualInvestment: number; 
    expectedReturn: number; 
    duration: number;
}

export type Result = {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
}