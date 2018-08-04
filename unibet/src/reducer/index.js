import {combineReducers} from 'redux';
import {addAddress as addressBook} from "./addAddressReducer";
import {addEdit} from "./editReducer";

export const reducers = combineReducers({
  addressBook,
  addEdit
})