//Main libs
import React, { Component, useRef, createRef } from 'react'

// Next.JS libs

//Animation Libs
import { TweenMax as TM, Power3 } from 'gsap';

//Swiper libs
import SwiperCore, { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Mousewheel]);

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.slideTitle = createRef();
        this.slideCat = createRef();
    }

    render() {

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

        return (
            <>
                <div className="projects-wrapper">
                    <Swiper {...params}
                        onSlideChangeTransitionStart={(swiper) => {
                            TM.to(this.slideCat, 1, {
                                y: 15,
                                ease: Power3.easeOut,
                            })
                        }} >
                        <SwiperSlide>
                            <div className="Project">
                                <div className="project-image">
                                    <img src="https://source.unsplash.com/450x580/?colorful1" />
                                </div>
                                <div className="project-info">
                                    <p className="project-cat" ref={this.slideCat}>Animation</p>
                                    <p className="project-name" ref={this.slideTitle}>The Last Stance</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Project">
                                <div className="project-image">
                                    <img src="https://source.unsplash.com/450x580/?colorful2" />
                                </div>
                                <div className="project-info">
                                    <p className="project-cat">Animation</p>
                                    <p className="project-name">The Last Stance</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Project">
                                <div className="project-image">
                                    <img src="https://source.unsplash.com/450x580/?colorful3" />
                                </div>
                                <div className="project-info">
                                    <p className="project-cat">Animation</p>
                                    <p className="project-name">The Last Stance</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Project">
                                <div className="project-image">
                                    <img src="https://source.unsplash.com/450x580/?colorful4" />
                                </div>
                                <div className="project-info">
                                    <p className="project-cat">Animation</p>
                                    <p className="project-name">The Last Stance</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </>
        )
    }
}
