import React from 'react';

const Todo = props => (
  <div>
    <h4 data-cy="title">{props.todo.title}</h4>
  </div>
);

export default Todo;
