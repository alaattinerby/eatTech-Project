import React, { Component } from 'react'
import logo from "../svg/logo.svg"
import "../css/header.css"

export class Header extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <div className="container">
                        <div className="header__frame">
                            <div className="logo">
                                <img src={logo} alt="Logo"/>
                            </div>

                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header
