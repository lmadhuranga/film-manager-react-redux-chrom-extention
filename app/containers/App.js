import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MainSection from '../components/MainSection';
import * as FilmActions from '../actions/films';
import * as AuthorActions from '../actions/authors';
import style from './App.css';
import FilmAdd from "../components/FilmAdd";

@connect(
    state => ({
        films: state.films,
        authors: state.authors
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
            isNew: false
        };
        this.handlerToggleView = this.handlerToggleView.bind(this);
    }

    handlerToggleView(isNew) {
        this.setState({
            isNew: isNew
        })
    }

    render() {
        const {films, actions, authors} = this.props;
        let isNew = this.state.isNew;
        let currentPage;
        if (isNew) {
            currentPage = <FilmAdd
                toggleView={this.handlerToggleView}
                authors={authors}
                actions={actions}/>
        }
        else {
            currentPage = <MainSection
                toggleView={this.handlerToggleView}
                films={films}
                actions={actions}/>;
        }
        return (
            <div className={style.normal}>
                {currentPage}
            </div>
        );
    }
}
