import Link from 'next/link'

export default function FirstPost() {
	return (
		<>
			<h1>My first post</h1>
      <h2>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </h2>
      <br/>
      <img src='msdlas' alt='some image'/>
		</>
	);
}
