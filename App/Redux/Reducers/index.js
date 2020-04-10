import { combineReducers } from 'redux'
import usersListReducer from './UsersListReducer';

export default combineReducers({
    usersList: usersListReducer
})