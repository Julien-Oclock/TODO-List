import React from "react";
import { PropTypes } from 'prop-types';


import './styles.scss'

const Task = ({id, label, done}) => {
    return (  
        <li className={done ? 'task task--checked' : 'task'}>
            <label htmlFor={id} className="task__label">
                <input id={id} className="task__checkbox" type="checkbox" onChange={() => {}} checked={done}></input>
                {label}
            </label>
        </li>
    )
}

Task.propTypes = {
    id : PropTypes.number.isRequired,
    label : PropTypes.string,
    done : PropTypes.bool
  }
  

  
Task.defaultProps = {
    label : '',
    done : false
  }

export default Task;