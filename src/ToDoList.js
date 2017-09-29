import React, { Component } from 'react';
import Task from './Task.js';
import AddTaskForm from './AddTaskForm.js';

class ToDoList extends Component {
  constructor() {
    super();

    try {
      const storedState = JSON.parse(localStorage.state);
      this.state = storedState;
    } catch(e) {
      this.state = {tasks: []};
    }
  }

  taskList = () => {
    const tasks = this.state.tasks;
    return (
      tasks.map((_, index) =>
        <Task
          key={index}
          index={index}
          name={tasks[index].name}
          done={tasks[index].done}
          className={tasks[index].done ? 'done' : 'todo'}
          onClick={this.handleTaskClick}
          delete={this.handleDelete}
         />
      )
    )
  }

  newTask = (taskName) => {
    const tasks = this.state.tasks;
    tasks.push({name: taskName, done: false});
    this.setState({tasks: tasks});
    this.persistState();
  }

  handleTaskClick = (taskIndex) => {
    const tasks = this.state.tasks;
    if(!tasks[taskIndex]) { return; }

    tasks[taskIndex].done = !tasks[taskIndex].done;
    this.setState({tasks: tasks});
    this.persistState();
  }

  handleDelete = (taskIndex) => {
    const tasks = this.state.tasks
    tasks.splice(taskIndex, 1);

    this.setState({tasks: tasks});
    this.persistState();
  }

  persistState = () => {
    localStorage.state = JSON.stringify(this.state);
  }

  render() {

    return (
      <div className="card">
        <h2>Things to do</h2>
        <AddTaskForm
          onSubmit={this.newTask}
        />
        <div className="task-list">
          {this.taskList()}
        </div>
      </div>
    )
  }
}

export default ToDoList;
