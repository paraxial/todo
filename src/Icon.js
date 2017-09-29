import React, { Component } from 'react';

class Icon extends Component {
  render() {
    const iconClass = this.props.done ? 'fa-check-square-o' : 'fa-square-o';

    return (
        <i
          className={`fa ${iconClass}`}
          aria-hidden="true"
        />
    )
  }
}

export default Icon;
