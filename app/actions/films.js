import * as types from '../constants/ActionTypes';
import uuid from 'uuid';

export function saveFilm(film) {
    if (film.id) {
        return {type: types.UPDATE_FILM, film};
    }
    else {
        film.id = uuid.v4();
        return {type: types.ADD_FILM, film};
    }
}

export function deleteFilm(film) {
    return {type: types.DELETE_FILM, film};
}
