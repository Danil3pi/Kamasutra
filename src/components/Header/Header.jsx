import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.header__img} src="https://w7.pngwing.com/pngs/312/1018/png-transparent-orange-blue-and-black-logo-logo-circle-technology-circle-blue-text-information-technology.png" />
        </header>
    );
};

export default Header;