import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByCategoryMan, filterByCategoryWomen, filterByCategoryChildren, filterReset } from '../../features/products/productsSlice'

import styles from './Category.module.css'

const Category = () => {
	const dispatch = useDispatch()

	return (
		<ul className={styles.root}>
			<li onClick={() => dispatch(filterReset())}>ALL</li>
			<li onClick={() => { dispatch(filterByCategoryMan()) }}>MAN</li>
			<li onClick={() => { dispatch(filterByCategoryWomen()) }}>WOMEN</li>
			<li onClick={() => { dispatch(filterByCategoryChildren()) }}>CHILDREN</li>
		</ul>
	)
}

export default Category