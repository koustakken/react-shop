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
	currentProducts: [],
	isLoading: false
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterByPrice: (state) => { state.currentProducts.sort((a, b) => a.price > b.price ? 1 : -1) },
		filterByAbc: (state) => { state.currentProducts.sort((a, b) => a.name < b.name ? 1 : -1) },
		filterByRating: (state) => { state.currentProducts.sort((a, b) => a.rating < b.rating ? 1 : -1) },
		filterByCategoryMan: (state) => ({ ...state, currentProducts: state.products.filter((a) => a.category.id === 0) }),
		filterByCategoryWomen: (state) => ({ ...state, currentProducts: state.products.filter((a) => a.category.id === 1) }),
		filterByCategoryChildren: (state) => ({ ...state, currentProducts: state.products.filter((a) => a.category.id === 2) }),
		filterReset: (state) => ({ ...state, currentProducts: state.products.filter((a) => a) })
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload
			state.currentProducts = action.payload
			state.isLoading = false
		})
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false
		})
	}
})
export const {
	filterByPrice,
	filterByRating,
	filterByAbc,
	filterByCategoryMan,
	filterByCategoryWomen,
	filterByCategoryChildren,
	filterReset
} = productsSlice.actions
export default productsSlice.reducer