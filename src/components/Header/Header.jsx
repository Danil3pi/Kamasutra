import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img src="http://besocial.wp4life.com/wp-content/uploads/2017/03/logo.png" alt="Besocial"></img>
        </header>
    );
};

export default Header;