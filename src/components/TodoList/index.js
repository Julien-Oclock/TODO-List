// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Component
import Task from 'src/components/Task';
import Counter from 'src/components/Counter';
import Form from 'src/components/Form';

// == Composant
const App = () => (
  <div className="TodoList">
    <h1>TodoList</h1>
    <Task />
    <Counter />
    <Form />
  </div>
);

// == Export
export default App;
