import React from "react";

import './styles.scss'

const Task = () => {
    return (  
        <div className="tasks">
            <ul className="taskList">
                <li className="task task--checked">
                    <label htmlFor="1" className="task__label">
                        <input id="1" className="task__checkbox" type="checkbox" onChange={() => {}} checked></input>
                        faire une todoList
                    </label>
                </li>
                <li className="task">
                    <label htmlFor='2'className="task__label">
                        <input id='2' className="task__checkbox" type="checkbox" onChange={() => {}}></input>
                        faire une todolist en react
                    </label>
                </li>
                <li className="task">
                    <label htmlFor="3" className="task__label">
                        <input id='3' className="task__checkbox" type="checkbox" onChange={() => {}}></input>
                        Coder facebook
                    </label>
                </li>
            </ul>  
        </div>
    )
}

export default Task;