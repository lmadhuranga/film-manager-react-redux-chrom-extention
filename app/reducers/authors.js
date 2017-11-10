import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
    name: 'Author 1',
    age:'32',
    id: 0
}];

export default function authors(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        default:
            return state;


    }
}
