import React from 'react'
import styles from './Category.module.css'

const Category = () => {

	const categories = ['Man', 'Women', 'Children'];
	const [active, setActive] = React.useState(0)

	return (
		<ul className={styles.root}>
			{categories.map((name, i) => <li
				key={i}
				className={i === active ? styles.active : ''}
				onClick={() => setActive(i)}
			>
				{name}
			</li>)}
		</ul>
	)
}

export default Category