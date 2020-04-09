import { createStore, combineReducers, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// import reducers
import todoReducers from './features/todo/redux/reducers';

// config regucers

const allReducers = {
    todoReducers
};

const reducers = combineReducers({
  ...allReducers,
})

const stores = createStore(reducers, composeWithDevTools());

export default stores;



