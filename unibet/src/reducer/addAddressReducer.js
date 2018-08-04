import {ADD_ADDRESS, ADD_TEMP} from '../actions/addAddress';

const reducer =  (accumulator, currentValue) =>{
  return (accumulator > currentValue.seqNo) ? accumulator : currentValue.seqNo; // do we need brackets
}

export const addAddress = (state = {addressList:[], temp:{}}, action) => {
  switch (action.type) { // we dont need address to be passed
    case ADD_ADDRESS :
      if(!state.temp.hasOwnProperty('seqNo'))  // differ update vs new. alternatively update handle can be set.
      {
        state.temp.seqNo = state.addressList.reduce(reducer,0) +1
      }
      let found = false
      let newAddressList = state.addressList.map((item) => {
        if(item.seqNo === state.temp.seqNo){
          found = true;
          return Object.assign(item, state.temp)
        }else{
          return item
        }
      })

      newAddressList = found ? newAddressList : newAddressList.concat(state.temp) // address list is already new. mutable ok.

      return ({addressList : newAddressList, temp:{}})
      // return ({addressList :[...state.addressList, {
      //   firstName:action.payload.firstName,
      //   lastName:action.payload.lastName,
      //   phoneNo:action.payload.phoneNo,
      //   seqNo:seqNo
      // }], temp:state.temp})


    case ADD_TEMP :
      return ({addressList:state.addressList, temp: action.payload})// can we use assign

    default :
      return state;
  }
}