import React, {Component, PropTypes} from 'react';
import uuid from 'uuid';

export default class FilmAdd extends Component {

    static propTypes = {
        addFilm: PropTypes.func.isRequired,
        toggleView: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            film: {name: ''}
        };
    }

    handlerClick() {
        this.props.toggleView(false);
    }

    onTitleChange(event) {
        const film = this.state.film;
        console.log('mad_msg__film', film);
        film.name = event.target.value;
        this.setState({
            film: film
        });
    }

    onClickSave(event) {
        const film = this.state.film;
        film.id = uuid.v4();
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
                <input
                    type="text"
                    onChange={this.onTitleChange.bind(this)}
                    value={this.state.film.name}
                />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave.bind(this)}
                />
            </section>
        );
    }
}
