import React, { Component } from 'react';

class TaskToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: '',
    };
  }

  addTask = () => {
    const { currentTask } = this.state;
    if (currentTask.trim() !== '') {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, currentTask],
        currentTask: '', 
      }));
    }
  }

  deleteTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addTask();
    }
  }

  render() {
    const { tasks, currentTask } = this.state;

    return (
      <div className='wrapper'>
        <div className='task-manager-block'>
          <div className='container'>
            <div className='task-list'>
              {tasks.map((task, index) => (
                <div key={index} className='task'>
                  <input type='checkbox' />
                  {task}
                  <button className='delete-task' onClick={() => this.deleteTask(index)}>Удалить</button>
                </div>
              ))}
            </div>
            <div className='task-manager'>
              <input
                type='text'
                value={currentTask}
                onChange={(e) => this.setState({ currentTask: e.target.value })}
                onKeyPress={this.handleKeyPress}
                placeholder='Введите задачу...'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskToDo;


