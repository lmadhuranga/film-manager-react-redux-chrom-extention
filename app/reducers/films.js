import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
    name: 'Hello',
    watched: false,
    id: 0
}];

export default function films(state = initialState, action) {
    switch (action.type) {

        case ActionTypes.ADD_FILM_SUCCESS:
            return [...state, Object.assign({}, action.film.data)];

        // Update state's film only selected film
        case ActionTypes.UPDATE_FILM_SUCCESS:
            let updateFilm = action.film.data;
            return state.map(film =>
                (film.id === updateFilm.id ?
                    Object.assign({}, film, updateFilm) :
                    film)
            );

        case ActionTypes.LOAD_FILMS_SUCCESS:
            return action.films.data;
        // Delete form existing state
        case ActionTypes.DELETE_FILM_SUCCESS:
            return state.filter(
                (film) => {
                    if (film.id !== action.film.id) return film;
                }
            );

        default:
            return state;


    }
}
