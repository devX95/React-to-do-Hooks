import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="todo">
      <div className="todo-left">
        <input 
            type="checkbox" 
            checked={todo.isCompleted}
            onChange={e => completeTodo(index)}
            />
        <h3 
          style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
          {todo.text}
          </h3>
      </div>
      <div className="todo-right">
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
      
    </div>
    );
}

export default Todo;