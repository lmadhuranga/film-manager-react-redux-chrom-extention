import React, {Component, PropTypes} from 'react';
import style from './FilmItem.css';
import Link from '../common/Link';
import Quality from '../common/Quality';
import Size from '../common/Size';
import Name from '../common/Name';
import UserLabel from '../common/UserLabel';

export default class TodoItem extends Component {

    static propTypes = {
        film: PropTypes.object.isRequired,
        deleteFilm: PropTypes.func.isRequired,
        loadFilms: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.handlerDelete = this.handlerDelete.bind(this);
    }

    handlerDelete(event) {
        const {film, deleteFilm, loadFilms} = this.props;
        deleteFilm(film);
        loadFilms();
    }

    render() {
        let element;
        const {film} = this.props;
        element = (
            <div>
                <label>
                    <Name label={film.name}/>-
                    <Size label={film.size}/>-
                    <Quality label={film.quality}/>-
                    <UserLabel label={film.uploader}/>-
                    <Link url={film.location} label={film.location}/>
                </label>
                &nbsp;<a className={style.closeBtn} onClick={this.handlerDelete} href="#">x</a>
            </div>
        );
        return (
            <li>
                {element}
            </li>
        );
    }
}
