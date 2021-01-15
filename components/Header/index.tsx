import { ReactElement } from 'react';
import styles from './container.module.css';

function Header(): ReactElement {
	return (
		<>
			<div className={styles.container}>I'm the header</div>;
		</>
	);
}

export default Header;
