import {combineReducers} from 'redux';

const viewport = (state={
  latitude: -27.9268,
  longitude: 153.4003,
  zoom: 9
}, action) => {
  switch (action.type) {
    case 'SET_VIEWPORT':
      return {...state, ...action.payload};
    default:
      return state
  }
};

const features = (state=[], action) => {
  switch(action.type){
    case 'FETCH_DATA':
      return action.payload.features;
    case 'SET_FEATURES_FILTER':
      return action.payload;
    default:
      return state
  }
};

const isFiltered = (state = false, action) => {
  switch(action.type){
    case 'FILTER_IS_SET':
      return action.payload;
    default:
      return state
  }
};

export const rootReducer = combineReducers({
  viewport, features, isFiltered
});