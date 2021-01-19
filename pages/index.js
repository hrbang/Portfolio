// Next & Sanity Libs
import Head from 'next/head'
import groq from 'groq'
import client from '../client'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'

//Components
import Navigation from '../components/Navigation'

//Swiper libs
import SwiperCore, { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Mousewheel]);

function urlFor(source) {
	return imageUrlBuilder(client).image(source)
}

export default function Index(props) {

	// Post Fra Sanity.IO
	const { posts = [] } = props

	// Params til swiper
	const params = {
		mousewheel: {
			invert: false,
		},
		spaceBetween: 150,
		slidesPerView: 2,
		centeredSlides: true,
		simulateTouch: false,
		speed: 1150
	}

	Index.getInitialProps = async () => ({
		posts: await client.fetch(groq`
		  *[_type == "post"]
		`)
	})

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="background-pattern"></div>

			<main className="main">
				<div className="wrapper">
					<Navigation />
				</div>
				<div className="all-projects">
					<div className="projects-wrapper">
						<Swiper {...params}>
							{posts.map(
								({ _id, title = '', slug = '', mainImage = '', categories = '', }) =>
									slug && (
										<SwiperSlide key={_id}>
											<Link href="/post/[slug]" as={`/post/${slug.current}`}>
												<a>
													<div className="project">
														{mainImage && (
															<div className="project-image">
																<img src={urlFor(mainImage).width(500).url()} />
															</div>
														)}
														<div className="project-info">
															{/* {categories && (
																<div className="project-category">
																	{categories.map(category => <p key={category}>{category}</p>)}
																</div>
															)} */}
															<div className="project-category">
																	<p className="cat">Kategorinavn</p>
																</div>
															<div className="project-name">
																<p className="name">{title}</p>
															</div>
														</div>
													</div>
												</a>
											</Link>{' '}
										</SwiperSlide>
									)
							)}
						</Swiper>
					</div>
				</div>
			</main>
		</>
	)



}
