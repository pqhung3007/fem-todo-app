import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: [],

}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducer: {},
})

export default todoSlice.reducer