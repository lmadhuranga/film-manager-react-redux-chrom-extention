import * as types from '../constants/ActionTypes';
import uuid from 'uuid';

export function saveFilm(film) {
    console.log('mad_msg__ savefilm reducer', film);
    if (film.id) {
        return {type: types.UPDATE_FILM, film};
    }
    else {
        film.id = uuid.v4();
        return {type: types.ADD_FILM, film};
    }
}
