import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSort = createAsyncThunk(
	'sort/getSort',
	async (_, thunkAPI) => {
		try {
			const res = await axios('src/mock/sort.json')
			return res.data
		} catch (error) {
			console.log(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

const initialState = {
	sort: []
}

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getSort.fulfilled, (state, action) => {
			state.sort = action.payload
		})
	}
})

export default sortSlice.reducer