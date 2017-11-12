import React, {Component, PropTypes} from 'react';
import FilmItem from './FilmItem';
import {SHOW_ALL} from '../constants/TodoFilters';

export default class MainSection extends Component {

    static propTypes = {
        films: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired,
        toggleView: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {filter: SHOW_ALL};
        this.handlerToggleView = this.handlerToggleView.bind(this);
    }

    handlerToggleView(page) {
        if (page.name)
            this.props.toggleView(page);
        else
            this.props.toggleView({name:'new'});
    }

    render() {
        const {films, actions} = this.props;
        return (
            <section >
                <h1>List Movie</h1>
                <button
                    className="btn btn-small"
                    onClick={this.handlerToggleView}>Add Movie
                </button>
                <ul >
                    {films.map(film =>
                        <FilmItem
                            key={film.id}
                            film={film} {...actions}
                            toggleView={this.handlerToggleView}
                        />
                    )}
                </ul>
            </section>
        );
    }
}
