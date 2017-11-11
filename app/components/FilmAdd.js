import React, {Component, PropTypes} from 'react';
import FilmForm from '../components/FilmForm';

export default class FilmAdd extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            film: {name: '', size: '', quality: '', location: '', uploader: ''},
            errors: {
                name: 'sd',
                size: 'dd',
                quality: 'qu',
                uploader: 'user1',
                location: 'qu'
            }
        };
        this.handlerGoToList = this.handlerGoToList.bind(this);
        this.updateFilmState = this.updateFilmState.bind(this);
        this.handlerSaveFilm = this.handlerSaveFilm.bind(this);
        this.handlerFake = this.handlerFake.bind(this);
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

    handlerFake(event) {
        event.preventDefault();
        let fakeFilms = [
            {
                name: 'aa',
                size: 'aa',
                quality: 'qu',
                uploader: 'user1',
                location: 'http://192.168.2.2'
            },
            {
                name: 'bb',
                size: 'bb',
                quality: 'qu',
                uploader: 'user1',
                location: 'http://192.168.2.23'
            },
            {
                name: 'cc',
                size: 'cc',
                quality: 'qu',
                uploader: 'user1',
                location: 'http://192.168.2.24'
            },
        ];
        fakeFilms.forEach((film) => {
            this.props.actions.saveFilm(film)
        });
        // this.handlerGoToList();
    }

    render() {
        return (
            <section>
                <h1>Add Movie</h1>
                <label onClick={this.handlerGoToList}>List Movie</label>
                <br/>
                <label onClick={this.handlerFake}>Fake Movie</label>
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
