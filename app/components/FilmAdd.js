import React, {Component, PropTypes} from 'react';
import FilmForm from '../components/FilmForm';

export default class FilmAdd extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            film: {name: '', size: '', quality: '', location: ''},
            errors: {
                name: 'sd',
                size: 'dd',
                quality:'qu',
                locaiton:'qu'
            }
        };
        this.handlerGoToList = this.handlerGoToList.bind(this);
        this.updateFilmState = this.updateFilmState.bind(this);
        this.handlerSaveFilm = this.handlerSaveFilm.bind(this);

        console.log('mad_msg__this.props.actions', this.props.actions)
        console.log('mad_msg__this.props.authors', this.props.authors)
    }

    handlerGoToList() {
        this.props.toggleView(false);
    }

    updateFilmState(event) {
        const field = event.target.name;
        let film = this.state.film;
        film[field] = event.target.value;
        return this.setState({film: film});
    }

    handlerSaveFilm(event) {
        event.preventDefault();
        this.props.actions.saveFilm(this.state.film);
        this.handlerGoToList();
    }

    render() {
        return (
            <section>
                <h1>Add Movie</h1>
                <label onClick={this.handlerGoToList}>List Movie</label>
                <FilmForm
                    film={this.state.film}
                    onSave={this.handlerSaveFilm}
                    onChange={this.updateFilmState}
                    errors={this.state.errors}
                />

            </section>
        );
    }
}

FilmAdd.propTypes = {
    toggleView: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};
