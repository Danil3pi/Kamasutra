import React from 'react'
import classes from './Nav.module.css'


const Nav = () => {
    return (
        <nav className={classes.nav}>
        <div>
          <a href="profile" className={classes.nav_link}>Profile</a>
        </div>
        <div>
          <a href="dialogs" className={`${classes.nav_link} ${classes.active}`}>Messages</a>
        </div>
        <div>
          <a href="#" className={classes.nav_link}>News</a>
        </div>
        <div>
          <a href="#" className={classes.nav_link}>Music</a>
        </div>
        <div >
          <a href="#" className={classes.nav_link}>Settings</a>
        </div>
      </nav>
    );
};

export default Nav;