import { createSlice } from '@reduxjs/toolkit'
import reducers from './repasReducers';

export const repasSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: []
    },
    reducers: reducers,
});

export const { updateRepas } = repasSlice.actions;

export default repasSlice.reducer;