import React, { Component } from 'react'

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
                    <p>Menu</p>
                </div>
            </div>
        )
    }
}
