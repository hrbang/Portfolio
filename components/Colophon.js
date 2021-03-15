import React, { Component } from 'react'
import Marquee from "react-marquee-slider";
import times from "lodash/times";

export default class Colophon extends Component {

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <>
                <div className="colophon-info">
                    <div className="colo-headline">
                        <h3 className="colo-title">Colophon</h3>
                    </div>
                    <div className="colo-content">
                        <div className="colo-top">
                            <div className="colo-inquires">
                                <h6 className="inquiry-title">I. General Inquiries</h6>
                                <a href="mailto:jonasbang@hotmail.dk" className="inquiry">Jonasbang@hotmail.dk</a>
                            </div>
                            <div className="colo-geo">
                                <h6 className="geo-title">II. Located at</h6>
                                <p className="geo-gps">N 55°58'55.056''<br />E 10°10'13.584''</p>
                            </div>
                        </div>
                        <div className="colo-bottom">
                            <div className="colo-socials">
                                <h6 className="socials-title">III. Socials</h6>
                                <ul>
                                    <li>
                                        <a href="#">Twitter <span className="animate-arrow">&#129042;</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Instagram <span className="animate-arrow">&#129042;</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Behance <span className="animate-arrow">&#129042;</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Spotify Playlist <span className="animate-arrow">&#129042;</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="colo-information">
                                <h6 className="information-title">IV. Informational</h6>
                                <p><span>Designed by &#129042; </span>Jonas Bang</p>
                                <p><span>Libraries &#129042; </span>React, Next.JS, Sanity.io</p>
                                <p><span>Typography &#129042; </span>NeueWorld & Migra</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="back-to-top">
                        <p onClick={() => this.scrollToTop()} className="btp">Back to top</p>
                    </div>
                    <div className="crypto">
                        <Marquee velocity={25}>
                            {times(1, Number).map(id => (
                                <p className="crypto-scroller">Chainlink: 8.47% &mdash; Bitcoin: 12.84% &mdash; Numeraire: 2.84% &mdash; Stellar Lumens: 10.84%</p>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </>
        )
    }
}
