import Head from "next/head";
import Link from 'next/link';
import Cursor from '../components/cursor'

import SplitText from 'gsap/all'


export default function Home() {

	const childSplit = new SplitText("h1", {
		type: "lines",
		linesClass: "split-child"
	});

	const parentSplit = new SplitText("h1", {
		linesClass: "split-parent"
	});

	gsap.from(childSplit.lines, {
		duration: 1.5,
		yPercent: 100,
		ease: "power4",
		stagger: 0.1
	});

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Cursor />
			<main className="jb_frontpage">
				<div className="jb_front__wrapper">
					<div className="jb_front__topnav">
						<div className="jb_front__topnav_logo">
							<p className="logo">
								"Portfolio"
						</p>
						</div>
						<div className="jb_front__topnav_about">
							<Link href="#">
								<a>About</a>
							</Link>
						</div>
					</div>
					<div className="jb_front__title">
						<h1 className="title">
							Hi! <br />I am Jonas Bang <br />an independent creative designer <br />based in Denmark.
					</h1>
					</div>
					<div className="jb_front__social">
						<ul>
							<li>
								<Link href="REMEMBER ME">
									<a>Behance</a>
								</Link>
							</li>
							<li>
								<Link href="REMEMBER ME">
									<a>Instagram</a>
								</Link>
							</li>
							<li>
								<Link href="REMEMBER ME">
									<a>Mail</a>
								</Link>
							</li>
						</ul>
					</div>
					{/* <div className="jb_front__botnav_projects">
					<Link href="REMEMBER ME">
						<a>Projects</a>
					</Link>
				</div>
				<div className="jb_front__botnav_reel">
					<Link href="REMEMBER ME">
						<a>Show Reel</a>
					</Link>
				</div> */}
				</div>
			</main>
		</div>
	);
}
