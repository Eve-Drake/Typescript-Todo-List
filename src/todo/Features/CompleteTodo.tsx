import React from 'react'
import { TodoInterface } from '../../TodoInterface'

interface Props {
  id: number,
  setTodosArray : React.Dispatch<React.SetStateAction<TodoInterface[]>>,
  todosArray : TodoInterface[],
  completed: boolean
}
const CompleteTodo = ({id, setTodosArray, todosArray, completed} : Props) => {

  const completeTodo = (id : number) =>{
    setTodosArray(todosArray.map((el)=> {
      if (el.id === id){
        return {...el, completed: !el.completed}
      }
      return el
    }))
  }
  return (
    <div>
        <button onClick={()=>completeTodo(id)}>{completed ? 'Undo' : 'Done'}</button>
    </div>
  )
}

export default CompleteTodo