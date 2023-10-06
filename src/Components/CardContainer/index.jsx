import styles from "./CardContainer.module.css";

const CardContainer = ({ children }) => {
	return (
		<div className={styles.root}>{children}</div>
	)
}

export default CardContainer;