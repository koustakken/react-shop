import Category from '../Category'
import Sort from '../Sort'
import CardContainer from '../CardContainer'
import Card from '../Card'

import styles from './Home.module.css'

const Home = () => {
	return (
		<>
			<div className={styles.top}>
				<Category />
				<Sort />
			</div>
			<CardContainer>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</CardContainer>
		</>
	)
}

export default Home