const creditrateLoaded = (rate) => {
  return {
    type: 'CREDITRATE_LOADED',
    payload: rate
  };
};

export {
  creditrateLoaded
}