import React, { Component } from 'react';

class AddTaskForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = event.target.newTask.value;

    if (!/\S/.test(newTask)) {
      return;
    }

    this.props.onSubmit(newTask);
    event.target.newTask.value = '';
  }

  render() {
    return (
      <div className="add-task">
        <form onSubmit={this.handleSubmit}>
          <input
            name="newTask"
            className="input-task"
            placeholder="New Task"
          />
        </form>
      </div>
    )
  }
}

export default AddTaskForm;
