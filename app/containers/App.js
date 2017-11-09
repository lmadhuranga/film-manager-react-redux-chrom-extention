import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MainSection from '../components/MainSection';
import * as FilmActions from '../actions/films';
import style from './App.css';
import FilmAdd from "../components/FilmAdd";

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
            isNew: true
        };
    }

    handlerToggleView(isNew) {
        this.setState({
            isNew: isNew
        })
    }

    render() {
        const {films, actions} = this.props;
        let isNew = this.state.isNew;
        let currentPage;
        if (isNew) {
            currentPage = <FilmAdd toggleView={this.handlerToggleView.bind(this)} addFilm={actions.addFilm} />
        }
        else {
            currentPage = <MainSection toggleView={this.handlerToggleView.bind(this)} films={films} actions={actions}/>;
        }
        return (
            <div className={style.normal}>
                {currentPage}
            </div>
        );
    }
}
