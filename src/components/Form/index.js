import React from "react";
import PropTypes from 'prop-types';

import './styles.scss'

const Form = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddTask(props.inputValue)
    }
    return (  
        <form className="addTaskForm" onSubmit={handleSubmit}>
            <input  
                className="addTaskForm__input" 
                value={props.inputValue} 
                onChange={props.handleInputChange} 
                placeholder="ajout d'une tâche">
            </input>
        </form>
    )
}

Form.propTypes = {
    inputValue : PropTypes.string,
    handleInputChange : PropTypes.func,
    handleAddTask : PropTypes.func
}


Form.defaultProps = {
    inputValue : '',
    handleInputChange : ()=> {},
    handleAddTask : (label, done=false)=> {
        console.log('Proptypes default func is send', label , done)
    }
}


export default Form;