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
					<img src={image} alt={title}/>
				</figure>
				<div className={styles.content}>
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
