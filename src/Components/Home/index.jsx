import React from 'react'
import Category from '../Category'
import Sort from '../Sort'
import CardContainer from '../CardContainer'
import Card from '../Card'

import styles from './Home.module.css'

import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
	const dispatch = useDispatch()

	const { products } = useSelector(({ products }) => products)
	const { sort } = useSelector(({ sort }) => sort)
	const { categories } = useSelector(({ categories }) => categories)

	const sortType = useSelector((state) => state.sort.active)
	const categoryType = useSelector((state) => state.categories.active)
	// придумать фильтрацию
	function sortFilter(item) {
		switch (sortType) {
			case 0:
				console.log(2)
				break
			case 1:
				console.log(2)
				break
			case 2:
				console.log(3)
				break
		}
	}
	return (
		<>
			<div className={styles.top}>
				<Category categories={categories} />
				<Sort sort={sort} />
			</div>
			{`категория: ${categoryType}, сортировка: ${sortType}`}
			<CardContainer>
				{products.filter(sortFilter).map((obj) =>
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