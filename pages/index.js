import Head from "next/head";
import Link from 'next/link';
import { TweenMax as TM, Power4 } from 'gsap'
import React, { Component } from 'react'

export default function Home() {

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="jb_frontpage">
				<FrontPage />
			</main>
		</div>
	);
}

export class FrontPage extends Component {

	constructor(props) {
		super(props);

		this.lineOne = null;
		this.lineTwo = null;
		this.lineThree = null;
		this.lineFour = null;
		this.logoAnim = null;
	}

	componentDidMount() {

		TM.to(this.lineOne, 1.5, {
			yPercent: -200,
			ease: Power4.easeOut,
		})

		TM.to(this.lineTwo, 1.5, {
			yPercent: -200,
			ease: Power4.easeOut,
			delay: .25
		})

		TM.to(this.lineThree, 1.5, {
			yPercent: -200,
			ease: Power4.easeOut,
			delay: .35
		})

		TM.to(this.lineFour, 1.5, {
			yPercent: -200,
			ease: Power4.easeOut,
			delay: .45
		})

		TM.to(this.logoAnim, 1, {
			yPercent: -100,
			ease: Power4.easeOut
		})

	}

	render() {
		return (
			<div className="jb_front__wrapper">
				<div className="jb_front__topnav">
					<div className="jb_front__topnav_logo">
						<p className="logo" ref={div => this.logoAnim = div}>
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
						<div className="wrap">
							<span ref={div => this.lineOne = div}>Hi!</span>
						</div>
						<div className="wrap">
							<span ref={div => this.lineTwo = div}>I am Jonas Bang</span>
						</div>
						<div className="wrap">
							<span ref={div => this.lineThree = div}>an independent creative designer</span>
						</div>
						<div className="wrap">
							<span ref={div => this.lineFour = div}>based in Denmark.</span>
						</div>
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
			</div>
		)
	}
}

