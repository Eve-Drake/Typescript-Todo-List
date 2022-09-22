import {useState} from 'react'
import { TodoInterface } from '../../TodoInterface'

interface Props {
  setTodosArray : React.Dispatch<React.SetStateAction<TodoInterface[]>>,
  todosArray : TodoInterface[]
}

const AddTodo = ({todosArray, setTodosArray} : Props) => {
  const [todo, setTodo] = useState<string>('')
  const [addTodo, setAddTodo] = useState<boolean>(false)

  const addNewTodo = (e : any) => {
    e.preventDefault()
    setTodosArray([...todosArray, {id: Math.floor(Math.random() * 1000), todo: todo, completed: false}])
    setTodo('')
  }
  return (
    <div>
      <button className='addButton' onClick={()=>setAddTodo(!addTodo)}>{(addTodo ? 'Close' : 'Add Todo')}</button>
      <div className={(addTodo? 'show' : 'hide')}>
        <form onSubmit={addNewTodo}>
        <input 
          placeholder='Enter Todo'
          type='text'
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
      </div>

    </div>
  )
}

export default AddTodo