import React from "react";
import styles from "./Card.module.css";

const Card = () => {
	const [isFavorite, favoriteToggle] = React.useState(false);
	const [isAdded, addedToggle] = React.useState(false);

	const onClickFav = () => {
		favoriteToggle(!isFavorite);
	}

	const onClickAdd = () => {
		addedToggle(!isAdded);
	}

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.headerTitle}>
					<div className={styles.category}>MEN</div>
					<img
						src={isFavorite ? "src/assets/heart-solid.svg" : "src/assets/heart-regular.svg"}
						onClick={onClickFav}
						alt="heart" width={24}
					/>
				</div>
				<img src="src\assets\leon.jpg" alt="item" />
				<div className={styles.container}>
					<div className={styles.name}>
						<p>LEON BRAWL STARS</p>
						<p>T-SHIRT</p>
					</div>
					<div className={styles.size}>
						<p>SIZE</p>
						<p>S, M, L, XL</p>
					</div>
				</div>
				<div className={isAdded ? styles.added : ''}>
					<button onClick={onClickAdd}>{isAdded ? 'Added' : '$129,99'}</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
