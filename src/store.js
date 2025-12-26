import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteSlics.jsx'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})