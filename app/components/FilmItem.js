import React, { Component, PropTypes } from 'react';

export default class TodoItem extends Component {

  static propTypes = {
    film: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let element;
    const { film } = this.props;

    element = (
        <div>
          <label>
              {film.name}
          </label>
        </div>
    );
    return (
      <li>
          {film.name}
      </li>
    );
  }
}
