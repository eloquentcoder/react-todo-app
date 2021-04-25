import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/todo-slice';
import TodoBlock from './TodoBlock';


export default function TodoList() {


    const todoList = useSelector(selectTodos);

        return (
            <div className="flex flex-col  w-3/4 h-80 overflow-y-auto rounded bg-gray-200 ">
                {
                    todoList.map((todo: { id: number; title: string; completed: boolean; }) => {
                        return <TodoBlock key={todo.id} todos={todo} />
                    })
                }
            </div>
        );

}