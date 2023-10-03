import styles from '../styles/Input.module.css'

const Input = () => {
	return (
		<div className={styles.root}>
			<input type="text" placeholder='Search...' />
			<img src="../src/assets/search.svg" alt="search" />
		</div>
	)
}

export default Input