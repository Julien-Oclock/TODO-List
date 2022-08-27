import React from "react";
import { PropTypes } from 'prop-types';

import Task from 'src/components/Tasks/Task'

import './styles.scss'

const Tasks = ({tasks}) => {
    return (  
        <div className="tasks">
            <ul className="taskList">
            { tasks.map((task) => 
                <Task {...task} key={task.id}></Task>
            )}
            </ul>  
        </div>
    )
}


Tasks.propTypes = {
    tasks : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        label : PropTypes.string,
        done : PropTypes.bool
    }),
    ),
  }
  

  
Tasks.defaultProps = {
    tasks : [],
  }

export default Tasks;