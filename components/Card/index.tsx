import { ReactElement, useState } from 'react';
import styles from './card.module.css';

interface cardInterface {
	title: string;
	description: string;
	image: string;
	onClick?: () => void;
}

const Card: React.FC<cardInterface> = ({
	title,
	description,
	image,
	onClick
}): ReactElement => {

	return (
		<div className={styles.container} onClick={onClick}>
			<figure className={styles.imageContainer}>
				<img className={styles.image} src={image} alt={title} />
			</figure>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default Card;
