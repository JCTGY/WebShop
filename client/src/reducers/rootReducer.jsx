import { combineReducers } from 'redux';

import userStateReducer from './userStateReducer';

//Combine all the sub reducers
const rootReducer = combineReducers({
    userState: userStateReducer,
})

export default rootReducer;