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

    /* const [relativeMouse, setRelativeMouse] = useState({ x: 0, y: 0, visible: false });

    let mouse = useMouse();
    useEffect(() => {
        requestAnimationFrame(handleProjectImage);
    }, [mouse])

    const postElement = useRef();
    const handleProjectImage = () => {

        const offSetCalc = postElement.current.getBoundingClientRect()

        if (offSetCalc.top < mouse.y && mouse.y < offSetCalc.top + offSetCalc.height) {
            setRelativeMouse({ x: mouse.x, y: mouse.y - offSetCalc.top, visible: true });
        }
        else {
            setRelativeMouse({ x: 0, y: 0, visible: false });
        }

    } */

    return (
        <li key={_id} /* ref={postElement} */>
            <Link href="/post/[slug]" as={`/post/${slug.current}`}>
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
                        {/* {mainImage && (
                            <div className="project-image"
                                style={{
                                    transform: `translate3d(${relativeMouse.x}px, ${relativeMouse.y}px, 0px)`,
                                    opacity: relativeMouse.visible ? 1 : 0,
                                }}>
                                <img src={urlFor(mainImage).width(350).url()} />
                            </div>
                        )} */}
                    </div>
                </a>
            </Link>
        </li>
    )
}
