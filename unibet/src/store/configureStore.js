import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from '../reducer'

const initialState = {
  phoneBook: {
    addressList: [],
    tempAddress: {firstName: '', lastName: '', phoneNo: '', seqNo: ''},
  }
}
export const store = createStore(reducers, initialState, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("store change", store.getState())
})