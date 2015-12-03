import { combineReducers } from 'redux';
import app from './App';

//Combine all the root reducers
const rootReducer = combineReducers({
    app
})

export default rootReducer