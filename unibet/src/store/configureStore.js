import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from '../reducer'
import { loadState, saveState } from './localStorage'
const initialState = loadState();
// const initialState = {
//   addressBook: []
// }
export const store = createStore(reducers, initialState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({state:store.getState()});
  console.log("store change", store.getState())
})