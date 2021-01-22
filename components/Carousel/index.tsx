import { ReactElement } from 'react';
import styles from './carousel.module.css';
import Card from '../Card/index'

interface carouselInterface {
	onClick?: () => void
}

const Carousel: React.FC<carouselInterface> = ({ onClick }): ReactElement => {

	return(
		<div className={styles.carousel}>
			<Card onClick={onClick} title='test' image='https://images.unsplash.com/photo-1591808338461-a544265cfb09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8b3JpZ2FtaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' description='lorem'>
				Card
			</Card>
			<Card title='test' image='https://images.unsplash.com/photo-1591808338461-a544265cfb09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8b3JpZ2FtaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' description='lorem'>
				Card
			</Card>
			<Card title='test' image='https://images.unsplash.com/photo-1591808338461-a544265cfb09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8b3JpZ2FtaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' description='lorem'>
				Card
			</Card>
			<Card title='test' image='https://images.unsplash.com/photo-1591808338461-a544265cfb09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8b3JpZ2FtaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' description='lorem'>
				Card
			</Card>
			<Card title='test' image='https://images.unsplash.com/photo-1591808338461-a544265cfb09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8b3JpZ2FtaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' description='lorem'>
				Card
			</Card>
			<Card title='test' image='https://images.unsplash.com/photo-1591808338461-a544265cfb09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8b3JpZ2FtaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' description='lorem'>
				Card
			</Card>
			<Card title='test' image='https://images.unsplash.com/photo-1591808338461-a544265cfb09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8b3JpZ2FtaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' description='lorem'>
				Card
			</Card>
		</div>
	)
};

export default Carousel;
