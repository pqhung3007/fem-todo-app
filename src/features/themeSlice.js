import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lightMode: true
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.lightMode = !state.lightMode

            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.toggle('dark')
            }
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer