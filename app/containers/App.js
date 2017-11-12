import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MainSection from '../components/MainSection';
import * as FilmActions from '../actions/films';
import style from './App.css';
import FilmAdd from "../components/FilmAdd";
import FilmUpdate from "../components/FilmUpdate";

@connect(
    state => ({
        films: state.films
    }),
    dispatch => ({
        actions: bindActionCreators(FilmActions, dispatch)
    })
)
export default class App extends Component {

    static propTypes = {
        films: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            page: {
                name: 'list'  //Important list, new, update:id
            }
        };
        this.handlerToggleView = this.handlerToggleView.bind(this);
    }

    handlerToggleView(page) {
        this.setState({
            page: page
        })
    }

    render() {
        const {films, actions} = this.props;
        const {page} = this.state;
        let currentPage;
        switch (page.name) {
            case 'new':
                currentPage = <FilmAdd
                    toggleView={this.handlerToggleView}
                    actions={actions}/>;
                break;
            case 'update':
                let selectFilm = films.filter(film =>
                    film.id === page.id
                );
                currentPage = <FilmUpdate
                    toggleView={this.handlerToggleView}
                    selectFilm={selectFilm[0]}
                    actions={actions}/>;
                break;
            default:
                currentPage = <MainSection
                    toggleView={this.handlerToggleView}
                    films={films}
                    actions={actions}/>;
                break;
        }

        return (
            <div className={style.normal}>
                {currentPage}
            </div>
        );
    }
}
