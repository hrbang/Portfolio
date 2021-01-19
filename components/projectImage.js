import React, { Component } from 'react'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source) {
	return imageUrlBuilder(client).image(source)
}

export default class ProjectImage extends Component {
    render() {
        return (
            <>
                <div className="project-image">
                    <img src={urlFor(mainImage).width(500).url()} />
                </div>
            </>
        )
    }
}
