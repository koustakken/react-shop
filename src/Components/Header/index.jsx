import { ROUTES } from '../../utils/routes';
import Search from "../Search";

import { Link } from 'react-router-dom'

import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<Link to={ROUTES.HOME}>React Redux Shop</Link>
				<Search />
				<div className={styles.list}>
					<ul>
						<li><Link to={ROUTES.LOGIN}>Login</Link></li>
						<li><Link to={ROUTES.FAVORITE}>Favorite</Link></li>
						<li><Link to={ROUTES.CART}>Cart</Link></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
