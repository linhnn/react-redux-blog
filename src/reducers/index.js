import { combineReducers } from 'redux';
import PostReducers from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducers,
  form: formReducer
});

export default rootReducer;
