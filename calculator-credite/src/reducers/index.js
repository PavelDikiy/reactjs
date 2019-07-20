// Redux
import { combineReducers } from 'redux';

const defaultState = {
  loanRates: [],
  selectedLoanRate: {},
  hasSelectedLoanRate: false,
  isFetchingLoanRates: true,
  loanSum: 0,
  loanCurrency: 'гривна',
  loanTerm: 0
};

const loanRatesStorage = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_LOAN_RATES':
      return {
        ...state,
        loanRates: action.loanRates,
        isFetchingLoanRates: action.isFetchingLoanRates
      };
    
    case 'ADD_SELECTED_LOAN_RATE':
      return {
        ...state,
        selectedLoanRate: action.selectedLoanRate,
        hasSelectedLoanRate: action.hasSelectedLoanRate
      };

    case 'SET_LOAN_SUM':
      return {
        ...state,
        loanSum: action.loanSum
      }

    case 'SET_LOAN_CURRENCY':
      return {
        ...state,
        loanCurrency: action.loanCurrency
      }

    case 'SET_LOAN_TERM':
      return {
        ...state,
        loanTerm: action.loanTerm
      }
      
    default:
      return state;
  }
};


export default combineReducers({ 
  loanRatesStorage
});