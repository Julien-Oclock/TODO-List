import React from "react";
import { PropTypes } from 'prop-types';


import './styles.scss'

const Counter = ({nbTask}) => {

    let message = 'aucune tâches en cours'

    if (nbTask === 1) message = '1 tâche en cours'

    else if (nbTask > 1 ) message = `${nbTask} tâches en cours`

    return (  
        <h2 className="taskCounter">{message}</h2>
    )
}

Counter.propTypes = {
    nbTask : PropTypes.number
  }
  

  
Counter.defaultProps = {
    nbTask : 2
  }

export default Counter;