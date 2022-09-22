import React from 'react'
import { TodoInterface } from '../../TodoInterface'

interface Props {
    id: number,
    setTodosArray : React.Dispatch<React.SetStateAction<TodoInterface[]>>,
    todosArray : TodoInterface[]
}


const DeleteTodo = ({id, setTodosArray, todosArray} : Props) => {
  
    const deleteTodo = (id : number) =>{
        setTodosArray(todosArray.filter(el => el.id !== id))
    }

return (
    <div>
        <button onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default DeleteTodo