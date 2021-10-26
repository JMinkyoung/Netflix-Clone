import {createStore, applyMiddleware} from 'redux';
import rootReducer from './index';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(ReduxThunk),
));