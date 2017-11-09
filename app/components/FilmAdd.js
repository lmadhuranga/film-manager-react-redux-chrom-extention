import React, {Component, PropTypes} from 'react';
import FilmForm from '../components/FilmForm';

export default class FilmAdd extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            film: {name: '', size:''}
        };
        this.updateFilmState = this.updateFilmState.bind(this);
    }

    handlerClick() {
        this.props.toggleView(false);
    }

    updateFilmState(event) {
        const field = event.target.name;
        let film = this.state.film;
        film[field] = event.target.value;
        return this.setState({film: film});
    }

    onClickSave(event) {
        this.props.addFilm(film);
        // show film list
        this.props.toggleView(false);
    }

    render() {
        return (
            <section>
                <h1>Movies</h1>
                <h2>Add Movie</h2>
                <label onClick={this.handlerClick.bind(this)}>List Movie</label>
                <FilmForm film={this.state.film}
                          onSave={this.onClickSave.bind(this)}
                          onChange={this.updateFilmState}
                          errors={this.state.errors}
                />

            </section>
        );
    }
}

FilmAdd.propTypes = {
    addFilm: PropTypes.func.isRequired,
    toggleView: PropTypes.func.isRequired
};
