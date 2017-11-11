import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {loadFilms} from '../actions/films';
import {loadAuthors} from '../actions/authors';
import {loadUsers} from '../actions/users';

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    store.dispatch(loadUsers());
    store.dispatch(loadFilms());
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
