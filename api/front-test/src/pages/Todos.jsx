import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

import {getTodos} from '../services/todos'
import NewTodos from '../components/newTodos'

const Todos = () => {
  const {token} = useSelector((state) => state.auth);
  const [todos, setTodos] = useState([])

  useEffect(() => {
      const getData = async () => {
          const res = await getTodos(token)
          setTodos(res.data)
      }

      getData()
  }, [])

  return (<>
    <h1 className='title'>
      Todos
    </h1>
    <NewTodos />
    <div className='todos'>
      {todos.map(todo => 
        <div className='todo'>
          <div className='label'>{todo.label}</div>
          <div className='description'>{todo.description}</div>
        </div>
      )}
    </div>
  </>)
}

export default Todos
