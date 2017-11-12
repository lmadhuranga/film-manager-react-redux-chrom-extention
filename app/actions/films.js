import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function deleteFilmSuccess(film) {
    return {type: types.DELETE_FILM_SUCCESS, film};
}

export function loadFilmsSuccess(films) {
    return {type: types.LOAD_FILMS_SUCCESS, films};
}

export function addFilmSuccess(film) {
    return {type: types.ADD_FILM_SUCCESS, film};
}
export function updateFilmSuccess(film) {
    return {type: types.UPDATE_FILM_SUCCESS, film};
}


export function deleteFilm(film) {
    return function (dispatch) {
        axios.delete(`http://localhost:9000/films/${film.id}`)
            .then(response => {
                dispatch(deleteFilmSuccess(film));
            })
            .catch(error => {
                throw(error);
            });
    }
}

export function loadFilms() {
    return function (dispatch) {
        axios.get('http://localhost:9000/films')
            .then(films => {
                dispatch(loadFilmsSuccess(films));
            })
            .catch(error => {
                throw(error);
            });
    }
}

export function addFilm(film) {
    return function (dispatch, getState) {
        axios.post('http://localhost:9000/films', film)
            .then(film => {
                dispatch(addFilmSuccess(film));
            })
            .catch(error => {
                throw(error);
            });
    }
}

export function updateFilm(film) {
    return function (dispatch, getState) {
        axios.put(`http://localhost:9000/films/${film.id}`, film)
            .then(film => {
                dispatch(updateFilmSuccess(film));
            })
            .catch(error => {
                throw(error);
            });
    }
}
