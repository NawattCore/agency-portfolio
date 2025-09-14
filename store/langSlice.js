
import { createSlice } from '@reduxjs/toolkit'

const initialState = { locale: 'en' }

const slice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLocale(state, action) { state.locale = action.payload }
  }
})

export const { setLocale } = slice.actions
export default slice.reducer
