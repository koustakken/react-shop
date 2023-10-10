import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSort } from '../../features/sort/sortSlice'

import styles from './Sort.module.css'

const Sort = () => {
	const dispatch = useDispatch()
	const { sort } = useSelector(({ sort }) => sort)
	const [active, setActive] = React.useState(0)

	React.useEffect(() => {
		dispatch(getSort())
	}, [dispatch])
	return (
		<div className={styles.root}>
			<ul>
				{sort.map((obj) => (
					<li
						key={obj.id}
						onClick={() => setActive(obj.id)}
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