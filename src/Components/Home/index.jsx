import React from 'react'
import Category from '../Category'
import Sort from '../Sort'
import CardContainer from '../CardContainer'
import Card from '../Card'
import Slider from '../Slider'

import styles from './Home.module.css'

import { useSelector } from 'react-redux'

const Home = () => {
	const { currentProducts } = useSelector(({ products }) => products)

	return (
		<>
			<Slider />
			<div className={styles.top}>
				<Category />
				<Sort />
			</div>
			<CardContainer>
				{currentProducts.map((obj) =>
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