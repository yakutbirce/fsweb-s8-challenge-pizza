import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
        <h1>Teknolojik Yemekler</h1>
        <nav>
            <p>
                <Link to='/'>Anasayfa</Link> - <strong>Sipariş Oluştur</strong>
            </p>
        </nav>
    </header>
  )
}

export default Header