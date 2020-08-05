import actions from './actions';

// Initial State
const initialState = {
  list: [],
  error: null,
  loading: false,
  country: null,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_STATE:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default countriesReducer;
