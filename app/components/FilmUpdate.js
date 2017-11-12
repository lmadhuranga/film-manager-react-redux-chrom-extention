import React, {Component, PropTypes} from 'react';
import FilmForm from '../components/FilmForm';

export default class FilmUpdate extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            errors: {}
        };
        this.updateFilmState = this.updateFilmState.bind(this);
        this.handlerSaveFilm = this.handlerSaveFilm.bind(this);
        this.handlerToggleView = this.handlerToggleView.bind(this);
    }

    handlerToggleView() {
        this.props.toggleView({name: 'list'});
    }

    componentWillMount() {
        const {selectFilm} = this.props;
        this.setState({film: selectFilm});

    }

    updateFilmState(event) {
        const field = event.target.name;
        let film = this.state.film;
        film[field] = event.target.value;
        return this.setState({film: film});
    }

    handlerSaveFilm(event) {
        event.preventDefault();
        const {updateFilm} = this.props.actions;
        updateFilm(this.state.film);
        this.handlerToggleView();
    }

    render() {
        return (
            <section>
                <h1>Update Movie</h1>
                <label onClick={this.handlerToggleView}>List Movie</label>
                <br/>
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

FilmUpdate.propTypes = {
    toggleView: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    selectFilm: PropTypes.object.isRequired
};
