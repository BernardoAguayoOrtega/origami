import { ReactElement, ReactNode, useEffect, useState } from 'react';
import styles from './container.module.css';

interface ContainerProps {
  style: string,
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children, style}): ReactElement => {

	return <div className={style === 'red' && styles.container}>
    hey
  </div>;
}

export default Container;
