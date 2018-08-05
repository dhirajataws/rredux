import {combineReducers} from 'redux';
import {addAddress as addressBook} from "./addAddressReducer";

export const reducers = combineReducers({
  addressBook
})