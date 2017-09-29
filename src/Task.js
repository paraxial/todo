import React, { Component } from 'react';
import Icon from './Icon.js'

class Task extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  }

  triggerDelete = () => {
    this.props.delete(this.props.index);
  }

  render() {
    const { name } = this.props;
    return (
      <li
        className={`task-box ${this.props.className}`}
        onClick={this.handleClick}
        value={name}
        tabIndex={this.props.index + 1}
      >
        <Icon done={this.props.done} />
        <span className="task-name">
          {name}
        </span>
        <i
          className="fa fa-trash"
          aria-hidden="true"
          onClick={this.triggerDelete}
        />
      </li>
    )
  }
}

export default Task;
