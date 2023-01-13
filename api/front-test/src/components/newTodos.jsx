import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';

import {postTodos} from '../services/todos';

const newTodos = () => {
    const {token} = useSelector((state) => state.auth);
    const labelRef = useRef()
    const descriptionRef = useRef()

    useEffect(() => {
        labelRef.current.focus();
    }, [])

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const res = await postTodos(token, {
            label: labelRef.current.value,
            description: descriptionRef.current.value
        });

        console.log(res)
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <div>
            <label>Label</label>
            <input type="text" ref={labelRef} placeholder="Enter a label" />
        </div>
        <div>
            <label>Description</label>
            <input type="text" ref={descriptionRef} placeholder="Enter a description" />
        </div>
        <div>
            <button type='submit'>Save</button>
        </div>
    </form>
  )
}

export default newTodos
