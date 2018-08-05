import {ADD_TEMP, ADD_ADDRESS_LIST} from '../actions/address';

export const phoneBook = (state = {addressList: [], tempAddress: {}}, action) => {
  switch (action.type) {
    case ADD_TEMP :
      return ({
        addressList: state.addressList, tempAddress: Object.assign({}, action.payload)
      })

    case ADD_ADDRESS_LIST :

      return ({
        addressList: [...action.payload]
        , tempAddress: {firstName: '', lastName: '', phoneNo: '', seqNo: ''}
      })

    default :
      return state;
  }
}