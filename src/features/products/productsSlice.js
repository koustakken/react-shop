import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (_, thunkAPI) => {
		try {
			const res = await axios('src/mock/products.json')
			return res.data
		} catch (error) {
			console.log(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

const initialState = {
	products: [],
	isLoading: false
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload
			state.isLoading = false
		})
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false
		})
	}
})
export const { filterByPrice } = productsSlice.actions
export default productsSlice.reducer