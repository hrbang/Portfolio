// Next.JS Libs
import Head from 'next/head'

//Bootstrap Libs
import { Container, Row, Col } from 'react-bootstrap'

//Components
import Navigation from '../components/Navigation'
import Projects from '../components/Projects'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="background-pattern"></div>

			<main className="main">
				<div className="wrapper">
					<nav>
						<Navigation />
					</nav>
					<div className="all-projects">
						<Projects />
					</div>
				</div>


			</main>
		</>
	)
}
