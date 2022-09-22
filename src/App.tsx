import React, { useState } from 'react';
import AddTodo from './todo/Features/AddTodo';
import './App.css';
import RenderTodos from './todo/Display/RenderTodos';
import {TodoInterface} from './TodoInterface'



function App() {
  const [todosArray, setTodosArray] = useState<TodoInterface []>([
    {id: 0, todo: 'Rewite in typescript', completed: false},
    {id: 1, todo: 'Work out why to use typescript', completed: false},
    {id: 2, todo: 'Learn to pass props in typescript', completed: false},
    {id: 3, todo: 'Work out why to use typescript', completed: false},
  ])
  return (
    <div className="App">
      <h1>Todo list with Typescript:</h1>
      <AddTodo todosArray={todosArray} setTodosArray={setTodosArray}/>
      <RenderTodos todosArray={todosArray} setTodosArray={setTodosArray}/>
    </div>
  );
}

export default App;
