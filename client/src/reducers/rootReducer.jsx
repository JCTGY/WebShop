import { combineReducers } from 'redux';

import userStateReducer from './userStateReducer';
import checkOutReducer from './checkOutReducer';

//Combine all the sub reducers
const rootReducer = combineReducers({
    userState: userStateReducer,
    checkOut: checkOutReducer,
})

export default rootReducer;