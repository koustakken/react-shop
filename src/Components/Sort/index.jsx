import React from 'react'

import styles from './Sort.module.css'

const Sort = () => {
	const sortRef = React.useRef();

	const sorts = [
		{ name: 'популярности', sortProperty: 'rating' },
		{ name: 'цене', sortProperty: 'price' },
		{ name: 'алфавиту', sortProperty: 'title' },
	]

	const [sort, setSort] = React.useState({ name: 'популярности', sortProperty: 'rating' })

	const [open, setOpen] = React.useState(false);

	const onClickPopup = () => {
		setOpen(!open);
	};

	return (
		<div ref={sortRef} className={styles.root}>
			<div className={styles.label}>
				<p>Сортировка по:</p>
				<span onClick={() => onClickPopup()}>{sort.name}</span>
			</div>
			{open && (
				<div className={styles.popup}>
					<ul onClick={() => onClickPopup()}>
						{sorts.map((obj, i) => (
							<li
								key={i}
								onClick={() => setSort(obj)}
								className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort