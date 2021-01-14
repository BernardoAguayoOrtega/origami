import Link from 'next/link';
import Head from 'next/head';
import Container from '../../components/container'

export default function FirstPost() {
	return (
		<Container>
			<Head>
				<title>My first post</title>
			</Head>
			<h1>My first post</h1>
			<h2>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</h2>
			<br />
		</Container>
	);
}
