import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
};

export default TodosList;
