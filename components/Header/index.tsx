import { ReactElement } from 'react';
import styles from './header.module.css';

const Header = (): ReactElement => {
	return (
		<>
			<div className={styles.header}>I'm the header</div>
		</>
	);
};

export default Header;
