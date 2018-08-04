import {ADD_EDIT} from '../actions/addEdit';

export const addEdit = (state = 0, action) => {
  switch (action.type) {
    case ADD_EDIT :
      return action.payload;

    default :
      return state;
  }
}