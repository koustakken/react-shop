import React from 'react'
import Category from '../Category'
import Sort from '../Sort'
import CardContainer from '../CardContainer'
import Card from '../Card'

import styles from './Home.module.css'

import { useSelector } from 'react-redux'

const Home = () => {

	const { products } = useSelector(({ products }) => products)
	const { sort } = useSelector(({ sort }) => sort)
	const { categories } = useSelector(({ categories }) => categories)

	const sortType = useSelector((state) => state.sort.active)
	const categoryType = useSelector((state) => state.categories.active)
	// придумать фильтрацию
	return (
		<>
			<div className={styles.top}>
				<Category categories={categories} />
				<Sort sort={sort} />
			</div>
			{`категория: ${categoryType}, сортировка: ${sortType}`}
			<CardContainer>
				{products.map((obj) =>
					<Card
						key={obj.id}
						title={obj.title}
						price={obj.price}
						rating={obj.rating}
						category={obj.category}
						sizes={obj.sizes}
						imageUrl={obj.imageUrl}
					/>
				)}
			</CardContainer>
		</>
	)
}

export default Home