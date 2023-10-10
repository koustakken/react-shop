import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSort } from '../../features/sort/sortSlice'

import styles from './Sort.module.css'

const Sort = ({ sort }) => {
	const active = useSelector((state) => state.sort.active)
	const dispatch = useDispatch()

	return (
		<div className={styles.root}>
			<ul>
				{sort.map((obj) => (
					<li
						key={obj.id}
						onClick={() => dispatch(setActiveSort(obj.id))}
						className={obj.id === active ? styles.active : ''}
					>
						{obj.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sort