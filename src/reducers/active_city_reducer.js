const ActiveCityReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'CITY_SELECTED') {
    return action.payload;
  } else {
    return state;
  }
};

export default ActiveCityReducer;
