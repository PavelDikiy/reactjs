
const initState = {
  creditrate: [],
  loading: true
};

const reducer = (state = initState, action) => {

  switch(action.type){
    case 'CREDITRATE_LOADED':
      return {
        creditrate: action.payload,
        loading: false
      };
    default:
      return state;
  }

};

export default reducer;