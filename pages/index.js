import Head from "next/head";
import Link from "next/link";
import { TweenMax as TM, TimelineMax, Power4 } from "gsap";
import React, { Component } from "react";

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
  }

  componentDidMount() {}

  render() {
    return (
    <div className="jb_front__wrapper">
        <div className="jb_front__topnav">
          	<div className="jb_front__topnav_logo">
            	<p className="logo">"Portfolio"</p>
          	</div>
          	<div className="jb_front__topnav_about">
            	<Link href="/about">
             		<a>About</a>
            	</Link>
          	</div>
        </div>
        <div className="jb_front__title">
        	<h1 className="title">Hi!</h1>
        	<h1 className="title">I am Jonas Bang</h1>
        	<h1 className="title">an independent creative designer</h1>
        	<h1 className="title">based in Denmark.</h1>
        </div>
        <div className="jb_front__botnav_left">
        	<Link href="/projects">
            	<a>Projects</a>
          	</Link>
        </div>
        <div className="jb_front__botnav_middle">
          	<Link href="#">
            	<a>Behance</a>
          	</Link>
          	<Link href="#">
            	<a>Dribbble</a>
          	</Link>
          	<Link href="#">
            	<a>Github</a>
          	</Link>
        </div>
        <div className="jb_front__botnav_right">
          	<Link href="#">
            	<a>Showreel</a>
          	</Link>
        </div>
    </div>
    );
  }
}
