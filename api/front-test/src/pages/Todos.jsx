import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import {getTodos} from '../services/todos';
import NewTodos from '../components/newTodos';

const Todos = () => {
  const {token} = useSelector((state) => state.auth);
  const [todos, setTodos] = useState([])

  useEffect(() => {
      const getData = async () => {
          const res = await getTodos(token)
          if (res.status == 200) {
            setTodos(res.data)
          }
      }

      if (token) {
        getData()
      }
  }, [token])

  return (<>
    <h1 className='title'>
      Todos
    </h1>
    <NewTodos />
    <div className='todos'>
      {todos.reverse().map(todo => 
        <div className='todo'>
          <div className='label'>{todo.label}</div>
          <div className='description'>{todo.description}</div>
          <div className='time'>--- {dayjs(todo.created_at).fromNow()}</div>
        </div>
      )}
    </div>
  </>)
}

export default Todos
