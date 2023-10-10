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
	sort: [],
	active: 0
}

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setActiveSort(state, action) {
			state.active = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getSort.fulfilled, (state, action) => {
			state.sort = action.payload
		})
	}
})

export const { setActiveSort } = sortSlice.actions;
export default sortSlice.reducer