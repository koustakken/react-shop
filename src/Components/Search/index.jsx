import styles from './Search.module.css'

const Search = () => {
	return (
		<div className={styles.root}>
			<input type="text" placeholder='Search...' />
			<img src="../src/assets/search.svg" alt="search" />
		</div>
	)
}

export default Search