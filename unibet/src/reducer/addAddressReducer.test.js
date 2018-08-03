import {addAddress} from "./addAddressReducer";

describe('test ',() => {
  it('adds new address into addressBook', () => {
    const state = {
      addressBook:[]
    }
    const address = {
      firstName:'firstName',
      lastName:'lastName',
      phoneNo:123456789
    }
    const action = {
      type:'ADD_ADDRESS',
      payload:address
    }
    console.log(addAddress(state, action));
    // assert(addAddress(state, action))
  })
})