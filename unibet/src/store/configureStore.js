import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from '../reducer'
import { loadState, saveState } from './localStorage'
const persistedState = loadState();
const initialState = {
  addressBook: []
}
export const store = createStore(reducers, initialState, applyMiddleware(thunk));

store.subscribe(() => {
  // saveState({addressBook:store.getState().addressBook});
  console.log("store change", store.getState())
})