import Header from "../Header";
import Category from "../Category";
import Sort from "../Sort";
import Card from "../Card";
import CardContainer from '../CardContainer';

import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.app}>
			<Header />
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
		</div>
	);
}

export default App;
