
const initState = {
  creditrate: []
};

const reducer = (state = initState, action) => {

  switch(action.type){
    case 'CREDITRATE_LOADED':
      return {
        creditrate: action.payload
      };
    default:
      return state;
  }

};

export default reducer;