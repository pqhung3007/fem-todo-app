import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allTodos: JSON.parse(window.localStorage.getItem('todo')) || [],
    activeTodos: JSON.parse(window.localStorage.getItem('todo')) || [],
    completedTodos: [],
    showAll: true,
    showActive: false,
    showCompleted: false,
    updatedTodo: {
        item: {},
        edit: false
    }
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.allTodos.push(action.payload)
            state.activeTodos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.allTodos = state.allTodos.filter((todo) => todo.id !== action.payload.id)
            state.activeTodos = state.allTodos.filter((todo) => todo.id !== action.payload.id)
        },
        editTodo: (state, action) => {
            state.updatedTodo = {
                item: action.payload.todo,
                edit: true
            }
        },
        updateTodo: (state, action) => {
            state.allTodos = state.allTodos.map((todo) => todo.id === action.payload[0] ? { ...todo, ...action.payload[1] } : todo)
            state.updatedTodo = { item: {}, edit: false }
        },
        markTodoCompleted: (state, action) => {
            state.allTodos.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed
                    state.activeTodos.pop(todo)
                }
            });
        },
        showAllTodos: (state) => {
            state.showAll = true
            state.showActive = false
            state.showCompleted = false
        },
        showActiveTodos: (state) => {
            state.activeTodos = state.allTodos.filter((todo) => !todo.completed)
            state.showAll = false
            state.showActive = true
            state.showCompleted = false
        },
        showCompletedTodos: (state) => {
            state.completedTodos = state.allTodos.filter((todo) => todo.completed)
            state.showAll = false
            state.showActive = false
            state.showCompleted = true
        },
        clearCompletedTodos: (state) => {
            state.completedTodos = []
            state.allTodos = state.allTodos.filter((todo) => !todo.completed)
        }
    },
})

export const {
    addTodo,
    removeTodo,
    editTodo,
    updateTodo,
    markTodoCompleted,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
    clearCompletedTodos,
} = todoSlice.actions;
export default todoSlice.reducer