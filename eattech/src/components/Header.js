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
                            <div className="header__logo">
                                <img src={logo} href="/" alt="Logo"/>
                            </div>
                            <input type="checkbox" id="menuCheck" className="menuCheck"/>
                            <label htmlFor="menuCheck" className="menuGroup">
                                <span className="menuGroup__Line"></span>
                            </label>
                            <nav className="navBar">
                                <ul className="navBar__menu">
                                    <li><a href="#">QR Menü</a></li>
                                    <li><a href="#">Fiyatlandırma</a></li>
                                    <li><a href="#">Referanslar</a></li>
                                    <li><a href="#">İletişim</a></li>
                                    <li><a href="#">Giriş</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header
