import Header from './Components/Header'
import Category from './Components/Category'
import Sort from './Components/Sort'

import styles from './styles/App.module.css'

function App() {


	return (
		<div className={styles.app}>
			<Header />
			<Category />
			<Sort />
		</div>
	)
}

export default App
