//Main Libs
import Head from "next/head";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import * as US from 'underscore';

//Components
import Projects from '../components/Projects'
import Menu from '../components/Menu'

export default function Home() {

	return (
		<div className="App">
			<Head>
				<title>Jonas Bang &mdash; Wunderkind</title>
				<link rel="icon" href="/favicon.ico" />
				<script src="https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/blotter.min.js" integrity="sha512-Na4qwz8+Hb6JAVf8zFKtPri3XX/Z9/drSpFQuA9hUDnSYLFuu+GU0sfyDYw0SIUkvo/gSw//hCW/CjFJmIIc4Q==" crossOrigin="anonymous"></script>
			</Head>

			<main className="main-wrapper">
				<Menu />
				<div className="jb_frontpage">
					<div className="container">
						<div className="project-list">
							<ul className="projects">
								<li className="project-item project-item-left">
									<div className="project-1 project">
										<Image src="https://source.unsplash.com/1100x600/?art5" width={1100} height={600} />
										<div className="project-title"><span>.01</span></div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}