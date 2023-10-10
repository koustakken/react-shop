import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from '../features/categories/categoriesSlice'
import sortSlice from '../features/sort/sortSlice'
import productsSlice from '../features/products/productsSlice'

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		sort: sortSlice,
		products: productsSlice
	},
	devTools: true
})