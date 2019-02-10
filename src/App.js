import React, { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false}
  ]);

  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    const newCompletedTodos = [...completedTodos, newTodos[index]];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setCompletedTodos(newCompletedTodos);
  }

  const incompleteTodo = index => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos[index].isCompleted = false;
    const newTodos = [...todos, completedTodos[index]];
    newCompletedTodos.splice(index, 1);
    setTodos(newTodos);
    setCompletedTodos(newCompletedTodos);
  }


  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const removeCompletedTodo = index => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    setCompletedTodos(newCompletedTodos);
  }

  return (
    <div className="app">
      <div className="header">
        <div className="header-title">
          <h1>ToDoDo</h1>
          <h3>Powered By React Hooks</h3>
        </div>
        
      </div>
      <div className="container">
        <div className="todo-list-container">
          <div>
            <h3>ADD ITEM</h3>
            <TodoForm addTodo={addTodo}/>
          </div>
          <div>
            <h3>TODO</h3>
            {todos.length > 0 ? 
              <div className="todo-list">
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                  />
                ))}
              </div> : 
              <p>Hurray! You're all done.</p>}
          </div>
          <div>
            <h3>COMPLETED</h3>
            {completedTodos.length > 0 ? 
              <div className="todo-list">
                {completedTodos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={incompleteTodo}
                    removeTodo={removeCompletedTodo}
                  />
                ))}
              </div> : <p>Nothing Completed!</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
