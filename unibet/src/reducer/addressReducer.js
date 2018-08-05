import {ADD_ADDRESS, ADD_TEMP, ADD_ADDRESS_LIST} from '../actions/address';

const reducer = (accumulator, currentValue) => {
  return (accumulator > currentValue.seqNo) ? accumulator : currentValue.seqNo; // do we need brackets
}

export const phoneBook = (state = {addressList: [], tempAddress: {}}, action) => {
  switch (action.type) { // we dont need address to be passed
    // case ADD_ADDRESS :
    //
    //   return ({addressList: newAddressList, tempAddress: {firstName: '', lastName: '', phoneNo: '', seqNo: ''}})

    case ADD_TEMP :
      return ({
        addressList: state.addressList, tempAddress: Object.assign({}, action.payload)
      })

    case ADD_ADDRESS_LIST :

      return ({
        addressList: action.payload, tempAddress: {firstName: '', lastName: '', phoneNo: '', seqNo: ''}})

    default :
      return state;
  }
}