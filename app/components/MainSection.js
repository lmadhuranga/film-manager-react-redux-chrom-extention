import React, {Component, PropTypes} from 'react';
import FilmItem from './FilmItem';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';
import style from './MainSection.css';

export default class MainSection extends Component {

    static propTypes = {
        films: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired,
        toggleView: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {filter: SHOW_ALL};
    }

    handlerClick() {
        this.props.toggleView(true);
    }

    render() {
        const {films, actions} = this.props;
        return (
            <section >
                <h1>List Movie</h1>
                <button className="btn btn-small" onClick={this.handlerClick.bind(this)}>Add Movie</button>
                <ul >
                    {films.map(film =>
                        <FilmItem key={film.id} film={film} {...actions} />
                    )}
                </ul>
            </section>
        );
    }
}
