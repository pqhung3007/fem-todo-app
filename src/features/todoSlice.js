import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allTodos: [],
    activeTodos: [],
    completedTodos: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.allTodos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.allTodos = state.allTodos.filter((todo) => todo.id !== action.payload.id)
        }
    },
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer