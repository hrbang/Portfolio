// Next & Sanity Libs
import Head from 'next/head'
import groq from 'groq'
import client from '../client'
import React from 'react';
import imageUrlBuilder from '@sanity/image-url'

// Components
import Navigation from '../components/Navigation'
import Post from '../components/Post'
import Colophon from '../components/Colophon'

export function urlFor(source) {
	return imageUrlBuilder(client).image(source)
}

export default function Index(props) {
	
	// Fetch Data fra Sanity.io
	const { posts = [] } = props
	Index.getInitialProps = async () => ({
		posts: await client.fetch(groq`
              *[_type == "post"]
            `)
	})

	return (
		<>
			<Head>
				<title>Jonas Bang &mdash; Interactive designer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="main">
				<div className="container">
					<nav className="navigation">
						<Navigation />
					</nav>
					<section className="projects-wrapper">
						<div className="projects">
							<ul>
								{posts.map(
									post => {return <Post _id={post._id} title={post.title} date={post.date} slug={post.slug} mainImage={post.mainImage} />}
								)}
							</ul>
						</div>
					</section>
					<footer className="colophon">
						<Colophon />
					</footer>
				</div>
			</main>
		</>
	)
}