import { Dispatch, ReactElement, SetStateAction } from 'react';
import styles from './modal.module.css';

interface modalInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<modalInterface> = ({ open, setOpen}): ReactElement => {

  const handleClose = () => setOpen(false)

	return (
		<div className={open ? styles.open : styles.close} onClick={handleClose}>
       
		</div>
	);
};

export default Modal;
