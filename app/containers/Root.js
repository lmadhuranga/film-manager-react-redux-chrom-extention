import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {loadAuthors} from '../actions/authors';

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    // store.dispatch(loadAuthors());
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
