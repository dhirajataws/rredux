import {ADD_ADDRESS} from '../actions/addAddress';

const reducer =  (accumulator, currentValue) =>{
  return accumulator > currentValue.seqNo ? accumulator : currentValue.seqNo;
}

export const addAddress = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS :
    const len = state.reduce(reducer,0)
      return [...state, {
        firstName:action.payload.firstName,
        lastName:action.payload.lastName,
        phoneNo:action.payload.phoneNo,
        seqNo:len +1
      }];

    default :
      return state;
  }
}