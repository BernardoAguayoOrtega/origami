import Head from 'next/head';
import Container from '../components/PageContainer/index';

function HomePage() {
	return (
		<>
			<Head>
				<title>Welcome</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Container style='home'>
				home
			</Container>
		</>
	);
}

export default HomePage;
