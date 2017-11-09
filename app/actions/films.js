import * as types from '../constants/ActionTypes';

export function addFilm(film) {
  return { type: types.ADD_FILM, film };
}

