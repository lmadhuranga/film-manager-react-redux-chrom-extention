import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
    firstName: 'Author 1',
    lastName: 'Author 1',
    age:'32',
    id: 0
}];

export default function users(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_USERS_SUCCESS:
            return action.users;

        default:
            return state;


    }
}
