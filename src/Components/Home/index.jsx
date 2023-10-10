import React from 'react'
import Category from '../Category'
import Sort from '../Sort'
import CardContainer from '../CardContainer'
import Card from '../Card'

import { useDispatch, useSelector } from 'react-redux'

import styles from './Home.module.css'
import { getProducts } from '../../features/products/productsSlice'

const Home = () => {
	const dispatch = useDispatch()
	const { products } = useSelector(({ products }) => products)

	React.useEffect(() => {
		dispatch(getProducts())
	}, [dispatch])
	return (
		<>
			<div className={styles.top}>
				<Category />
				<Sort />
			</div>
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