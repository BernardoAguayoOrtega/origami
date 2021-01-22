import { Dispatch, ReactElement, SetStateAction } from 'react';
import styles from './modal.module.css';

interface modalInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  image: string;
  title: string;
  description: string;
}

const Modal: React.FC<modalInterface> = ({ open, setOpen, image, title, description }): ReactElement => {

  const handleClose = () => setOpen(false)

	return (
		<div className={`${styles.base} ${open ? styles.open : styles.close}`} onClick={handleClose}>
      <div className="modal">
        <figure>
          <img src={image} alt={title}/>  
        </figure>  
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
		</div>
	);
};

export default Modal;
