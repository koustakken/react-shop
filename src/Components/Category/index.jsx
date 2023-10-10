import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from '../../features/categories/categoriesSlice'

import styles from './Category.module.css'

const Category = ({ categories }) => {
	const active = useSelector((state) => state.categories.active)
	const dispatch = useDispatch()

	return (
		<ul className={styles.root}>
			{categories.map((obj) => <li
				key={obj.id}
				className={obj.id === active ? styles.active : ''}
				onClick={() => dispatch(setActiveCategory(obj.id))}
			>
				{obj.name}
			</li>)}
		</ul>
	)
}

export default Category