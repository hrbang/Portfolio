//Main Libs
import React, { Component } from 'react'

//Next.JS Libs
import Link from 'next/link'

//Bootstrap


export default class Navigation extends Component {

    render() {
        return (
            <>
                <div className="navigation">
                    <div className="nav-links">
                        <ul className="navbar">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-active">Projects</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a>Showreel</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
