import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Marquee from "react-marquee-slider";
import times from "lodash/times";
/* import { useMouse } from '../public/hooks/cursorPosition'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client' */

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

export default function Post({ _id, title = '', slug = '', date = '', mainImage = '', }) {

    return (
        <li key={_id}>
            <Link href="/post/[slug]/" as={`/post/${slug.current}/`}>
                <a>
                    <div className="project">
                        <div className="project-inner">
                            <div className="project-title alignment">
                                <h2>{title}</h2>
                            </div>
                            <div className="project-date alignment">
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className="project-scrolling">
                            <div className="project-scroll">
                                <Marquee velocity={25}>
                                    {times(7, Number).map(id => (
                                        <p className="project-scroll-name">{title}</p>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </li>
    )
}
