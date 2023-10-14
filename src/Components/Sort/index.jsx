import styles from './Sort.module.css'

import { useDispatch } from 'react-redux'
import { filterByPrice, filterByRating, filterByAbc } from '../../features/products/productsSlice'

const Sort = () => {
	const dispatch = useDispatch()

	return (
		<div className={styles.root}>
			<ul>
				<li onClick={() => dispatch(filterByRating())}>BY RATING</li>
				<li onClick={() => dispatch(filterByPrice())}>BY PRICE</li>
				<li onClick={() => dispatch(filterByAbc())}>BY ABC</li>
			</ul>
		</div>
	)
}

export default Sort