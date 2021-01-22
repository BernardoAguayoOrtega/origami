import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';
import styles from './container.module.css';
import Header from '../Header/index';

interface ContainerProps {
	style: string;
	setOpen: Dispatch<SetStateAction<boolean>>;
	children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
	children,
	style,
}): ReactElement => {

	return (
		<div className={style === 'home' && styles.home}>
			<Header />
			{children}
		</div>
	);
};

export default Container;
