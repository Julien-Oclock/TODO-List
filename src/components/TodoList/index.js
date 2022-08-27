// == Import npm
import React, { PureComponent } from 'react';

// == Import
import './styles.scss';

import data from 'src/data/task'
// == Component
import Tasks from 'src/components/Tasks';
import Counter from 'src/components/Counter';
import Form from 'src/components/Form';

// == Composant
class Todo extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      taskInputLabel : '',
      taskData : data
    }
  }

  handleAddTask = (label, done = false) => {
    const {taskData} = this.state
    const id = taskData[taskData.length - 1].id + 11
    this.setState({ taskData : [...taskData, {id:id, label, done}]})
    this.setState({ taskInputLabel : ''})
  }

  handleInputChange = (event) => {
    this.setState({taskInputLabel : event.target.value})
  }

  render(){
    const { taskInputLabel, taskData } = this.state
    const processingTasks = taskData.filter((task) => !task.done)

    return(
      <div className="todoList">
        <Form 
          inputValue={taskInputLabel}   
          handleInputChange={this.handleInputChange}
          handleAddTask = {this.handleAddTask}
        />
        <Counter nbTask={processingTasks.length}/>
        <Tasks tasks={taskData}/>
      </div>
    )
  }


};



// == Export
export default Todo;
