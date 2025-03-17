import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink( {children, to} ) {

	// Recupera o endereço atual sendo exibido:
	const loc = useLocation();

	return (

		<Link className={`
			${styles.link}
			${loc.pathname === to ? styles.linkDestacado : ""}
		`} to={to}>
			{children}
		</Link>

	)
}

