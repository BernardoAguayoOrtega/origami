import { ReactElement, ReactNode, useEffect, useState } from 'react';
import styles from './container.module.css';

interface ContainerProps {
	style: string;
	children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
	children,
	style,
}): ReactElement => {
	return <div className={style === 'home' && styles.home}>{children}</div>
};

export default Container;
