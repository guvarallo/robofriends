import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { searchRobots, requestRobots } from '../reducers/reducers';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));