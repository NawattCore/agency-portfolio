
import { configureStore } from '@reduxjs/toolkit'
import langReducer from './langSlice'
import searchReducer from './searchSlice'

const store = configureStore({
  reducer: {
    lang: langReducer,
    search: searchReducer
  }
})

export default store
