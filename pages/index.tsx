import Head from 'next/head';
import Container from '../components/PageContainer/index';
import Carousel from '../components/Carousel/index';

function HomePage() {
	return (
		<>
			<Head>
				<title>Welcome</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Container style='home'>
				<div className='title'>
					<h1>Origami, "Ori" means folding and</h1>
					<h1>"Gami" means paper.</h1>
				</div>
				<Carousel />
			</Container>
			<style jsx>{`
				.title {
					margin-left: 3rem;
					margin-top: 3rem;
				}

				h1 {
					color: rgba(0,0,0,.7);
					font-weight: 700;
				}
			`}</style>
		</>
	);
}

export default HomePage;
