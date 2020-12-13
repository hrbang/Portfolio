import React, { Component } from 'react'
import Link from "next/link";

export default class Menu extends Component {
    render() {
        return (
            <div>
                <div className="jb_front__wrapper">
                    <div className="jb_front__topnav">
                        <div className="jb_front__topnav_logo">
                            <p className="logo">"Portfolio"</p>
                        </div>
                        <div className="jb_front__topnav_about">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Showreel</a>
                                    </Link>
                                </li>
                                <li>
                                    <div className="divider"></div>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>About</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
