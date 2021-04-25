import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { saveTodo } from '../store/todo-slice';




export default function TodoInput() {
    const [input, setinput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        console.log(`Adding ${input}`);
        dispatch(saveTodo({
            title: input,
            completed: false,
            id: Date.now()
        }));
    }

    return (
        <div className="flex space-x-4 bg-white rounded">
            <input className="h-8 w-64 rounded-full p-4 focus:outline-none" value={input} onChange={e=> setinput(e.target.value)} type="text" placeholder="Type Todo Here"></input>
            <button onClick={addTodo} type="button" className="h-8 w-32 px-3 bg-blue-400 rounded text-white">Add Todo</button>
        </div>        
    );
}




