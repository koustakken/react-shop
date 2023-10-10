import React from 'react';
import AppRouter from '../Routes'
import Header from '../Header'

import styles from "./App.module.css";

import { getProducts } from '../../features/products/productsSlice'
import { getCategories } from '../../features/categories/categoriesSlice'
import { getSort } from '../../features/sort/sortSlice'
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getProducts())
		dispatch(getCategories())
		dispatch(getSort())
	}, [])

	return (
		<div className={styles.app}>
			<Header />
			<AppRouter />
		</div>
	);
}

export default App;
