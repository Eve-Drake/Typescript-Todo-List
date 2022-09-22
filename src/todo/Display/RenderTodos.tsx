import React from 'react'
import { TodoInterface } from '../../TodoInterface'
import Complete from '../Features/CompleteTodo';
import DeleteTodo from '../Features/DeleteTodo';

interface Props {
    setTodosArray : React.Dispatch<React.SetStateAction<TodoInterface[]>>,
    todosArray : TodoInterface[]
}

const RenderTodos = ({todosArray, setTodosArray} : Props) => {
  return (
    <div >
        {todosArray.map((todo)=>(
            <div key={todo.id} className='todo'>
                <p className={(todo.completed ? 'textCompleted' : '')}>{todo.todo}</p>
                <div className='todoButtons'>
                  <DeleteTodo id = {todo.id} setTodosArray={setTodosArray} todosArray={todosArray}/>
                  <Complete id = {todo.id} setTodosArray={setTodosArray} todosArray={todosArray} completed = {todo.completed}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default RenderTodos