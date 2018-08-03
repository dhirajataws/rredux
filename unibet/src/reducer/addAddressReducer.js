import {ADD_ADDRESS} from '../actions/addAddress';

export const addAddress = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ADDRESS' :
      return [...state.addressBook,action.payload];
      break;

    default :
      return state;
  }
}