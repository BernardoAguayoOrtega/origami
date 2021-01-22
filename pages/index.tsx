import Head from 'next/head';
import Container from '../components/PageContainer/index';
import Carousel from '../components/Carousel/index';
import { useState } from 'react';
import Modal from '../components/Modal';

function HomePage() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<>
			<Modal description='some description' title='some title, amazing title' image='https://images.unsplash.com/photo-1552727408-5d0599032dfb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60' open={open} setOpen={setOpen} />
			<Head>
				<title>Welcome</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Container style='home' setOpen={setOpen}>
				<div className='title'>
					<h1>Origami, "Ori" means folding and</h1>
					<h1>"Gami" means paper.</h1>
				</div>
				<Carousel onClick={handleOpen}/>
			</Container>
			<style jsx>{`
				.title {
					margin-left: 3rem;
					margin-top: 3rem;
				}

				h1 {
					color: rgba(0, 0, 0, 0.7);
					font-weight: 700;
				}
			`}</style>
		</>
	);
}

export default HomePage;
