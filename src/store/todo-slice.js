import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   todoList: []
}

const todoslice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        checkTodo: (state, action) => {
            state.todoList.map((todo) => {
                if (action.payload === todo.id) {
                    return todo.completed = !todo.completed
                }
                return '';
            })
        },
    }
    
});

export const { saveTodo, checkTodo } = todoslice.actions
export const selectTodos = state => state.todos.todoList
export default todoslice.reducer