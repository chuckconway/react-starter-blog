import {FETCH_POSTS} from '../actions/index';

const INITITAL_STATE = {
  all:[],
  post:null
};

export default function(state = INITITAL_STATE, action) {

  switch (action.type) {
    case FETCH_POSTS:
    return {...state, all:action.payload.data};
  }

  return state;
}
