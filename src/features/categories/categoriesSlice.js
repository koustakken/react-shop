import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCategories = createAsyncThunk(
	'categories/getCategories',
	async (_, thunkAPI) => {
		try {
			const res = await axios('src/mock/categories.json')
			return res.data
		} catch (error) {
			console.log(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

const initialState = {
	categories: []
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.categories = action.payload
		})
	}
})

export default categoriesSlice.reducer