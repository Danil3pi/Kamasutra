import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className={classes.nav}>
        <div>
          <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div>
          <NavLink to="news" activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div>
          <NavLink to="music" activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div >
          <NavLink to="settings" activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
      </nav>
    );
};

export default Nav;