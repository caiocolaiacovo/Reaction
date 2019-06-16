import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore() {
  const composeEnhancers =    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  // const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
