import React from 'react';
import AppRouter from '../Routes'
import Header from '../Header'

import styles from "./App.module.css";

import { getProducts } from '../../features/products/productsSlice'
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(getProducts())
	}, [])

	return (
		<div className={styles.app}>
			<Header />
			<AppRouter />
		</div>
	);
}

export default App;
