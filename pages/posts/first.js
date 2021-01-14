import Link from 'next/link';
import Head from 'next/head';
import Container from '../../components/container'

export default function FirstPost(props) {

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

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')

  const json = await res?.json()

  return {
    props: { starts: json.stargazers_count, different: true}
  }
}
