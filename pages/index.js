import Head from "next/head";
import Link from 'next/link';
import Cursor from '../components/cursor'

export default function Home() {
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
						<span>Hi!</span>
						<span>I am Jonas Bang</span>
						<span>an independent creative designer</span>
						<span>based in Denmark.</span>
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
