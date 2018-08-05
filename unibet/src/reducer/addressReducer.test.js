import {phoneBook} from "./addressReducer";
import assert from 'assert';
import isEqual from 'lodash/isEqual'

const deepFreeze = require('deep-freeze');

describe('Address reducer ', () => {
  let state
  beforeEach(() => {
    state = {
      addressList: [],
      tempAddress: {firstName: '', lastName: '', phoneNo: '', seqNo: ''},
    }
    deepFreeze(state)
  })

  it('adds new address into addressList', () => {
    let action = {
      type: 'ADD_ADDRESS_LIST',
      payload: [{
        firstName: 'firstName',
        lastName: 'lastName',
        phoneNo: 123456789,
        seqNo: 1,
      }]
    }

    assert(isEqual(phoneBook(state, action), {
      addressList: [{
        firstName: 'firstName',
        lastName: 'lastName',
        phoneNo: 123456789,
        seqNo: 1,
      }],
      tempAddress: {firstName: '', lastName: '', phoneNo: '', seqNo: ''},
    }))
  })
  it('adds temp address to state', () => {
    let action = {
      type: 'ADD_TEMP',
      payload: {
        firstName: 'firstName',
        lastName: 'lastName',
        phoneNo: 123456789,
        seqNo: 1,
      }
    }

    assert(isEqual(phoneBook(state, action), {
      addressList: [],
      tempAddress: {
        firstName: 'firstName',
        lastName: 'lastName',
        phoneNo: 123456789,
        seqNo: 1,
      },
    }))
  })
})