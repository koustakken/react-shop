import AppRouter from '../Routes'
import Header from '../Header'

import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<AppRouter />
		</div>
	);
}

export default App;
