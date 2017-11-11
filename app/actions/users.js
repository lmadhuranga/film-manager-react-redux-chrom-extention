import * as types from '../constants/ActionTypes';
import userApi from '../api/mockUserApi';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
    return function (dispatch) {
        return userApi.getAllUsers().then(users =>{
            dispatch(loadAuthorsSuccess(users))
        }).catch(error =>{
            throw(error);
        })
    }
}
