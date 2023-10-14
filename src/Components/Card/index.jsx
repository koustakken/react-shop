import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, price, imageUrl, sizes, category }) => {
	const [isFavorite, favoriteToggle] = React.useState(false);
	const [isAdded, addedToggle] = React.useState(false);

	const onClickFav = () => {
		favoriteToggle(!isFavorite);
	}

	const onClickAdd = () => {
		addedToggle(!isAdded);
	}

	const [active, setActive] = React.useState(0)

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.headerTitle}>
					<div className={styles.category}>{category.name}</div>
					<img
						src={isFavorite ? "src/assets/heart-solid.svg" : "src/assets/heart-regular.svg"}
						onClick={onClickFav}
						alt="heart" width={24}
					/>
				</div>
				<img src={imageUrl} alt="item" />
				<div className={styles.container}>
					<div className={styles.name}>
						<p>{title}</p>
					</div>
					<div className={styles.size}>
						{sizes.map((size, i) =>
							<p
								key={i}
								className={i === active ? styles.active : ''}
								onClick={() => setActive(i)}
							>
								{size}
							</p>)}
					</div>
				</div>
				<div className={isAdded ? styles.added : ''}>
					<button onClick={onClickAdd}>{isAdded ? 'Added' : price + '$'}</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
