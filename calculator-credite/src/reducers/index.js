const initState = {
  creditrate: [],
  loading: true
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREDITRATE_LOADED':
      return {
        creditrate: action.rate,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;