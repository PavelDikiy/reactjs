export const fetchLoanRates = loanRates => ({
  type: 'FETCH_LOAN_RATES',
  loanRates,
  isFetchingLoanRates: false
});

export const addSelectedLoanRate = selectedLoanRate => ({
  type: 'ADD_SELECTED_LOAN_RATE',
  selectedLoanRate,
  hasSelectedLoanRate: true,
});

export const setLoanSum = loanSum => ({
  type: 'SET_LOAN_SUM',
  loanSum
});

export const setLoanCurrency = loanCurrency => ({
  type: 'SET_LOAN_CURRENCY',
  loanCurrency
});

export const setLoanTerm = loanTerm => ({
  type: 'SET_LOAN_TERM',
  loanTerm
});