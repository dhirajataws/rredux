import {ADD_ADDRESS, ADD_TEMP, ADD_ADDRESS_LIST} from '../actions/address';

const reducer =  (accumulator, currentValue) =>{
  return (accumulator > currentValue.seqNo) ? accumulator : currentValue.seqNo; // do we need brackets
}

export const phoneBook = (state = {addressList:[], tempAddress:{}}, action) => {
  switch (action.type) { // we dont need address to be passed
    case ADD_ADDRESS :
      if(state.tempAddress && state.tempAddress.seqNo === '')  // differ update vs new. alternatively update handle can be set.
      {
        state.tempAddress.seqNo = state.addressList.reduce(reducer,0) +1
      }
      let found = false
      let newAddressList = state.addressList.map((item) => {
        if(item.seqNo === state.tempAddress.seqNo){
          found = true;
          return Object.assign(item, state.tempAddress)
        }else{
          return item
        }
      })// try spread below
      newAddressList = found ? newAddressList : newAddressList.concat(state.tempAddress) // address list is already new. mutable ok.
      return ({addressList : newAddressList, tempAddress: {firstName:'',lastName:'',phoneNo:'', seqNo:''}})

    case ADD_TEMP :
      return ({addressList:state.addressList, tempAddress: Object.assign({},action.payload)
      })

    case ADD_ADDRESS_LIST :
      return ({addressList:action.payload, tempAddress: state.tempAddress
      })

    default :
      return state;
  }
}