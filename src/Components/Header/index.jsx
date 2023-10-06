import Search from "../Search";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<div>React Redux Shop</div>
				<Search />
				<div className={styles.list}>
					<ul>
						<li>Login</li>
						<li>Favorite</li>
						<li>Shop</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
