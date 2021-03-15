import React, { Component } from 'react'
import Link from 'next/link'

//Components
import Clock from './Clock'

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <div className="logo">
                    <p>PORTFOLIO &mdash; 23"</p>
                </div>
                <div className="clock-wrap">
                    <div className="clock">
                        Denmark: <Clock />
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
