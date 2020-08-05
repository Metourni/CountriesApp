// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from './reducers';
// Imports: Redux Root Saga
import rootSaga from './sagas';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Logger:
const logger = createLogger({
  // ...options
});
// Redux: Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
