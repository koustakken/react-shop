import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../features/categories/categoriesSlice';
import styles from './Category.module.css'

const Category = () => {

	const dispatch = useDispatch();
	const { categories } = useSelector(({ categories }) => categories)
	const [active, setActive] = React.useState(0)

	React.useEffect(() => {
		dispatch(getCategories())
	}, [dispatch])

	return (
		<ul className={styles.root}>
			{categories.map((obj) => <li
				key={obj.id}
				className={obj.id === active ? styles.active : ''}
				onClick={() => setActive(obj.id)}
			>
				{obj.name}
			</li>)}
		</ul>
	)
}

export default Category