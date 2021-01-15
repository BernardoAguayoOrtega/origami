import Link from 'next/link';
import { ReactElement } from 'react';
import styles from './header.module.css';
import { GiFoldedPaper } from 'react-icons/gi';

const Header = (): ReactElement => {
	return (
		<div className={styles.header}>
			<GiFoldedPaper className={styles.icon} />
			<div className={styles.linksContainer}>
				<Link href='/'>
					<a className={styles.link}>tutorials</a>
				</Link>
				<Link href='/'>
					<a className={styles.link}>about</a>
				</Link>
				<Link href='/'>
					<a className={styles.link}>contact</a>
				</Link>
				<Link href='/'>
					<a className={styles.subscribe}>subscribe</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
