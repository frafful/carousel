
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import auth from '../reducers/auth';
import notebookList from '../reducers/notebookList';
import notebook from '../reducers/notebook';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth,
      notebookList,
      notebook 
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
