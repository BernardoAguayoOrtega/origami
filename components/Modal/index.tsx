import { Dispatch, ReactElement, SetStateAction } from 'react';
import styles from './modal.module.css';

interface modalInterface {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	image: string;
	title: string;
	description: string;
}

const Modal: React.FC<modalInterface> = ({
	open,
	setOpen,
	image,
	title,
	description,
}): ReactElement => {
	const handleClose = (e) => {
		if (e?.target.children?.length === 1) {
			setOpen(false);
		}
	};
	return (
		<div
			className={`${styles.base} ${open ? styles.open : styles.close}`}
			onClick={handleClose}>
			<div className={styles.modal}>
				<figure>
					<img src={image} alt={title} />
				</figure>
				<div className={styles.modalContent}>
					<h3>{title}</h3>
					<div className={styles.description}>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
