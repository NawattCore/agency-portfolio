
import { createSlice } from '@reduxjs/toolkit'
const slice = createSlice({
  name: 'search',
  initialState: { q: '' },
  reducers: {
    setQuery(state, action) { state.q = action.payload }
  }
})
export const { setQuery } = slice.actions
export default slice.reducer
