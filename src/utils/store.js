import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from '../features/categories/categoriesSlice'
import sortSlice from '../features/sort/sortSlice'

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		sort: sortSlice
	},
	devTools: true
})