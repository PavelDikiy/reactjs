import {createStore} from 'redux';
import rootReducer from './redusers';

const store = createStore(rootReducer);
export default store;