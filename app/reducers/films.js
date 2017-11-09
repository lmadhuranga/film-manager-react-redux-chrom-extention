import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
    name: 'Hello',
    watched: false,
    id: 0
}];

export default function films(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_FILM:
            return [...state, Object.assign({}, action.film)];
        default:
            return state;


    }
}