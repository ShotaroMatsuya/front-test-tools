import React from 'react';

const Todo = props => (
  <div>
    <h4>{props.todo.title}</h4>
    <p>{props.todo.completed}</p>
  </div>
);

export default Todo;
